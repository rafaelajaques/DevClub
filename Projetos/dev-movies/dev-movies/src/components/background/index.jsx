/* eslint-disable no-unused-vars */
import { BackgroundImage, BackgroundGradient } from "./style";
import PropTypes from "prop-types";
import backgroundImage from "../../assets/background.svg";

export const Background = ({ children }) => {
  return (
    <BackgroundImage bgimage={backgroundImage}>
      <BackgroundGradient>{children}</BackgroundGradient>
    </BackgroundImage>
  );
};

Background.propTypes = {
  children: PropTypes.array,
};
