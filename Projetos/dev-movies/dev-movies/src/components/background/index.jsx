/* eslint-disable no-unused-vars */
import { BackgroundImage } from "./style";
import PropTypes from "prop-types";
import backgroundImage from "../../assets/background.svg";

export const Background = ({ children }) => {
  return (
    <BackgroundImage bgimage={backgroundImage}>{children}</BackgroundImage>
  );
};

Background.propTypes = {
  children: PropTypes.object,
};
