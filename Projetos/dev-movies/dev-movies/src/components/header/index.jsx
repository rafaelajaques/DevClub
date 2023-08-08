import { Container } from "./style";
import logoImage from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Container>
      <img src={logoImage} alt="logo" />
      <nav>
        <a href="#">Movies</a>
        <a href="#">TV Show</a>
        <a href="#">All</a>
      </nav>
    </Container>
  );
};
