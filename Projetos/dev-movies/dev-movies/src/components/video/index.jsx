import { Player, Youtube } from "@vime/react";
import * as C from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";

export const Video = () => {
  return (
    <C.Container>
      <C.Button>
        <AiOutlineArrowLeft />
        Back
      </C.Button>

      <Player controls>
        <Youtube videoId="07GOHDyeV-M" />
      </Player>
    </C.Container>
  );
};
