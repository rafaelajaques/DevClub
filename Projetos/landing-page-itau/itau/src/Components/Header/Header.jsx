import React from "react";
import * as S from "./styles";

import ItemMenu from "../Header/ItemMenu";
import LogoItau from "../../assets/logo.svg";
import IconUser from "../../assets/icon-user.svg";

export default function Header() {
  return (
    <S.Header>
      <S.Container>
        <S.ContainerItems>
          <div>
            <S.Img src={LogoItau} alt="logo Itaú" />
          </div>

          <S.Ul>
            <S.Li>
              <ItemMenu name="Para você" />
            </S.Li>
            <S.Li>
              <ItemMenu name="Para empresas" />
            </S.Li>
            <S.Li>
              <ItemMenu name="Serviços" />
            </S.Li>
            <S.Li>
              <ItemMenu name="Ajuda" />
            </S.Li>
          </S.Ul>

          <S.DivButtonAccess>
            <S.ButtonAccess>
              <img src={IconUser} alt="ícone de usuário" />
              <span>Acessar Conta</span>
            </S.ButtonAccess>
          </S.DivButtonAccess>
        </S.ContainerItems>
      </S.Container>
    </S.Header>
  );
}
