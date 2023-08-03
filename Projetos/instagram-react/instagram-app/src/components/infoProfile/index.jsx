import { Flex, Typography } from "../../style";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import * as C from "./style";

export function InfoProfile() {
  return (
    <Flex direction="row" align="center" justify="space-between">
      <C.Container>
        <C.Link>
          <C.ProfileImage
            src="https://avatars.githubusercontent.com/u/111152921?v=4"
            alt="Imagem de perfil"
          />
          <Typography weight="300" size="13px" height="15px">
            Rafaela
          </Typography>
        </C.Link>
      </C.Container>

      <C.Container>
        <AiFillHeart color="red" />
        <Typography weight="300" size="13px" height="15px">
          1234
        </Typography>

        <FaRegComment />
        <Typography weight="300" size="13px" height="15px">
          10
        </Typography>
      </C.Container>
    </Flex>
  );
}
