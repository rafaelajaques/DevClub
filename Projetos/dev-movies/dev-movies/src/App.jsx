import { useState } from "react";

import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";
import { Video } from "./components/video";

function App() {
  const [playVideo, setPlayVideo] = useState(false);

  const handleOpenPlayVideo = () => setPlayVideo(true);
  const handleClosePlayVideo = () => setPlayVideo(false);

  return (
    <Background>
      <Header />
      <DescriptionMovie handleOpenPlayVideo={handleOpenPlayVideo} />
      <Movies />
      <Video
        playVideo={playVideo}
        handleClosePlayVideo={handleClosePlayVideo}
      />
    </Background>
  );
}

export default App;
