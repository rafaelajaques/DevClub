/* eslint-disable no-unused-vars */
import { Typography } from "../../style";
import { InfoProfile } from "../infoProfile";
import * as C from "./style";

export function Publications() {
  return (
    <C.Container>
      <Typography>Publicações</Typography>

      <C.ContainerPublications>
        {Array.from(Array(20)).map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <C.Content>
            <C.PublicationImage
              src="https://avatars.githubusercontent.com/u/111152921?v=4"
              alt="Imagem de perfil"
            />
            <InfoProfile />
          </C.Content>
        ))}
      </C.ContainerPublications>
    </C.Container>
  );
}
