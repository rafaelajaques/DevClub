import styled from "styled-components";

export const BackgroundImage = styled.div`
  height: 100vh;
  background-image: url(${(props) => props?.bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
