import * as C from "./style";
import { BsPlayFill } from "react-icons/bs";

export const DescriptionMovie = () => {
  return (
    <C.Container>
      <C.Title>STAR WARS THE RISE OF SKYWALKER</C.Title>
      <C.Description>
        The surviving members of the resistance face the First Order once again,
        and the legendary conflict between the Jedi and the Sith reaches its
        peak bringing the Skywalker saga to its end.{" "}
      </C.Description>
      <C.Button>
        <BsPlayFill size={24} />
        Watch Now
      </C.Button>
    </C.Container>
  );
};
