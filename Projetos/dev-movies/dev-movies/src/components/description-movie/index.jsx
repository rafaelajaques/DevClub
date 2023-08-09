import * as C from "./style";
import { BsPlayFill } from "react-icons/bs";
import PropTypes from "prop-types";

export const DescriptionMovie = ({ handleOpenPlayVideo }) => {
  return (
    <C.Container>
      <C.Title>STAR WARS THE RISE OF SKYWALKER</C.Title>
      <C.Description>
        The surviving members of the resistance face the First Order once again,
        and the legendary conflict between the Jedi and the Sith reaches its
        peak bringing the Skywalker saga to its end.{" "}
      </C.Description>
      <C.Button onClick={handleOpenPlayVideo}>
        <BsPlayFill size={24} />
        Watch Now
      </C.Button>
    </C.Container>
  );
};

DescriptionMovie.propTypes = {
  handleOpenPlayVideo: PropTypes.func,
};
