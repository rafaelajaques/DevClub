import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";
import { Video } from "./components/video";

function App() {
  return (
    <Background>
      <Header />
      <DescriptionMovie />
      <Movies />
      <Video />
    </Background>
  );
}

export default App;
