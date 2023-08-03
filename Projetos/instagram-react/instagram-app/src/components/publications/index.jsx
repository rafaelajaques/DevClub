/* eslint-disable no-unused-vars */
import { Typography } from "../../style";
import { InfoProfile } from "../infoProfile";
import * as C from "./style";
import PropTypes from "prop-types";

export function Publications({ photos }) {
  return (
    <C.Container>
      <Typography>Publicações</Typography>

      <C.ContainerPublications>
        {photos.map((photo) => (
          // eslint-disable-next-line react/jsx-key
          <C.Content key={photo?.id}>
            <C.PublicationImage src={photo?.src?.medium} alt="fotografia" />
            <InfoProfile
              name={photo?.photographer}
              photo={photo?.src?.small}
              link={photo?.photographer_url}
            />
          </C.Content>
        ))}
      </C.ContainerPublications>
    </C.Container>
  );
}

Publications.propTypes = {
  photos: PropTypes.array,
};
