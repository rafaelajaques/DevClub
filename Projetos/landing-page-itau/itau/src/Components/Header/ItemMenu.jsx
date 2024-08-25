import ArrowDown from "../../assets/arrow-down.svg";
import * as S from "./styles";

export default function ItemMenu(props) {
  return (
    <>
      <S.ButtonItemMenu>
        <span>{props.name} </span>
        <img src={ArrowDown} alt="seta para baixo" />
      </S.ButtonItemMenu>
    </>
  );
}
