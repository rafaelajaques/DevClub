import { Background } from "./components/background";
import { DescriptionMovie } from "./components/description-movie";
import { Header } from "./components/header";
import { Movies } from "./components/movies";

function App() {
  return (
    <Background>
      <Header />
      <DescriptionMovie />
      <Movies />
    </Background>
  );
}

export default App;
