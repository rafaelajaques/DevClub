import styled from "styled-components";
import Background from "../../assets/bg-hero.jpg";

export const Section = styled.section`
  background-image: url(${Background});
  width: 100vw;
  height: 550px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1246px;
  padding: 0 50px;
  margin: 0 auto;
`;

export const DivLeft = styled.div`
  flex: 1;
  max-width: 400px;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 52px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const P = styled.p`
  color: #fff;
  font-size: 20px;
  max-width: 400px;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const DivButtons = styled.div`
  margin-bottom: 96px;
  display: flex;
  gap: 10px;
`;

export const ButtonExplorer = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  gap: 15px;
`;

export const Span = styled.span`
  color: #fff;
  font-weight: bold;
`;

export const Image = styled.img`
  width: 45%;
`;
