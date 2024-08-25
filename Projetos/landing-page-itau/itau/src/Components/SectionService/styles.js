import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 700px;
  padding-top: 30px;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 100%;
  max-width: 1246px;
  padding: 50px;
  margin: 0 auto;
`;

export const DivLeft = styled.section`
  flex: 1;
  max-width: 500px;
`;

export const Span = styled.span`
  display: block;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ec7000;
  margin-bottom: 35px;
`;

export const H2 = styled.h2`
  color: #33303e;
  font-size: 40px;
  font-weight: bold;
  line-height: 40px;
  margin-bottom: 24px;
  max-width: 450px;
`;

export const P = styled.p`
  font-size: 18px;
  max-width: 450px;
  margin-bottom: 20px;
  color: #4e4e59;
`;

export const Li = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #7a7786;
`;

export const DivMascara = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DivRight = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  width: 30%;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  transform: translateX(-50%);
  width: 60%;
`;
