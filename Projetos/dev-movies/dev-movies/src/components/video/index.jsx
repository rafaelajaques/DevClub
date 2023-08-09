import { Player, Youtube } from "@vime/react";
import * as C from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";
import PropTypes from "prop-types";

export const Video = ({ playVideo, handleClosePlayVideo }) => {
  return playVideo ? (
    <C.Container>
      <C.Button onClick={handleClosePlayVideo}>
        <AiOutlineArrowLeft />
        Back
      </C.Button>

      <Player controls>
        <Youtube videoId="07GOHDyeV-M" />
      </Player>
    </C.Container>
  ) : null;
};

Video.propTypes = {
  playVideo: PropTypes.bool,
  handleClosePlayVideo: PropTypes.func,
};
