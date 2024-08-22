import * as C from "./style";
import { BsPlayFill } from "react-icons/bs";
import PropTypes from "prop-types";

export const DescriptionMovie = ({
  title,
  description,
  handleOpenPlayVideo,
}) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Description>{description}</C.Description>
      <C.Button onClick={handleOpenPlayVideo}>
        <BsPlayFill size={24} />
        Watch Now
      </C.Button>
    </C.Container>
  );
};

DescriptionMovie.propTypes = {
  handleOpenPlayVideo: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
};
