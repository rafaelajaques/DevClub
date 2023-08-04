/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import { Flex, Screen, Typography } from "./style";
import { NavBar } from "./components/navbar";
import { Header } from "./components/header";
import { Stories } from "./components/stories";
import { Publications } from "./components/publications";
import { getPhotos } from "./services/photos";
import { Button } from "./style";

function App() {
  const PHOTOS_PER_PAGE = 8;

  const [theme, setTheme] = useState("dark");
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE);

  const releaseLoading = () => setIsLoading(false);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handlePhotosPerpage = () => {
    // setPhotosPerPage(photosPerPage * PHOTOS_PER_PAGE);
    setPhotosPerPage((prevState) => prevState + photosPerPage);
  };

  async function fetchPhotos() {
    setIsLoading(true);
    const data = await getPhotos(photosPerPage, releaseLoading);
    setPhotos(data);
  }

  useEffect(() => {
    fetchPhotos();
  }, [photosPerPage]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme} />

        <Flex gap="2px">
          <Header />
          <Stories photos={photos} />
          <Publications photos={photos} />

          {isLoading ? (
            <ReactLoading
              type="spinningBubbles"
              color={theme.textPrimary}
              height={20}
              width={20}
            />
          ) : (
            <Button onClick={handlePhotosPerpage}>
              <Typography>Ver mais</Typography>
            </Button>
          )}
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
