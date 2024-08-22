/* eslint-disable no-unused-vars */
import { BackgroundImage, BackgroundGradient } from "./style";
import PropTypes from "prop-types";

export const Background = ({ children, imageBanner }) => {
  return (
    <BackgroundImage bgimage={imageBanner}>
      <BackgroundGradient>{children}</BackgroundGradient>
    </BackgroundImage>
  );
};

Background.propTypes = {
  children: PropTypes.array,
  imageBanner: PropTypes.string,
};
