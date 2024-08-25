import * as S from "./styles";

export default function ItemList(props) {
  return (
    <>
      <S.DivMascara>
        <img src={props.img} alt={props.alt} />
      </S.DivMascara>
      <p>{props.p}</p>
    </>
  );
}
