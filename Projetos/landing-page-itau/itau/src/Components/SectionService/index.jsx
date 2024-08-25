import React from "react";
import * as S from "../../Components/SectionService/styles";

import ItemList from "./ItemList";
import PhoneIcon from "../../assets/icon-phone.svg";
import SolutionIcon from "../../assets/icon-solutions.svg";
import OptionIcon from "../../assets/icon-options.svg";
import CardIcon from "../../assets/icon-card.svg";
import ImagePhone from "../../assets/phone.png";

export default function SectionService() {
  return (
    <S.Section>
      <S.Container>
        <S.DivLeft>
          <S.Span>Serviços Exclusivos</S.Span>
          <S.H2>Gerencie suas finanças sem sair de casa</S.H2>
          <S.P>
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </S.P>

          <ul>
            <S.Li>
              <ItemList
                img={PhoneIcon}
                alt="solution icon"
                p="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"
              />
            </S.Li>

            <S.Li>
              <ItemList
                img={SolutionIcon}
                alt="solution icon"
                p="Soluções de empréstimos e negociação para suas finanças"
              />
            </S.Li>

            <S.Li>
              <ItemList
                img={OptionIcon}
                alt="solution icon"
                p="Diversas opções de investimentos, de acordo com seu perfil de empreendedor"
              />
            </S.Li>

            <S.Li>
              <ItemList
                img={CardIcon}
                alt="solution icon"
                p="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual"
              />
            </S.Li>
          </ul>
        </S.DivLeft>
      </S.Container>

      <S.DivRight>
        <S.Img src={ImagePhone} alt="phone" />
      </S.DivRight>
    </S.Section>
  );
}
