import Image from "next/image";
import { GenericItem } from "../../types";
import { PlayIcon } from "../icons/PlayIcon";
import {
  Container,
  ContainerRow,
  FloatingButton,
  ImageWrapper,
  InfoWrapper,
  Label,
} from "./styles";
import moment from "moment";
import Link from "next/link";
import useMediaQuery from "../../hooks/MediaQueryHook";

type Props = {
  name: string;
  images: SpotifyApi.ImageObject[];
  type: string;
  id: string;
  release_date?: string;
};

export const MediaCard: React.FC<Props> = (item) => {
  return (
    <Link href={`/${item.type}/${item.id}`} passHref>
      <Container>
        <ImageWrapper theme={{ type: item.type }}>
          <Image
            layout="responsive"
            src={
              (item.images[0] && item.images[0].url) ||
              "/images/placeholder.webp"
            }
            width={200}
            height={200}
            alt="Album"
          />
          <FloatingButton>
            <PlayIcon />
          </FloatingButton>
        </ImageWrapper>
        <InfoWrapper>
          <h2>{item.name}</h2>
          {item.type === "artist" ? (
            <>
              {/* Turn on first letter to upper case  */}
              <p>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
            </>
          ) : item.type === "album" ? (
            <>
              <p>
                <time>{moment(item.release_date).get("year")}</time> • Álbum
              </p>
            </>
          ) : null}
        </InfoWrapper>
      </Container>
    </Link>
  );
};

export const MediaCardGroup: React.FC<{
  items: GenericItem[];
  label: string;
}> = ({ items, label }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
  return (
    <>
      <Label>
        <Link href="/">
          <a>
            <h3>{label}</h3>
          </a>
        </Link>
        <Link href="/">
          <a>
            <span>Ver mais</span>
          </a>
        </Link>
      </Label>
      <ContainerRow>
        {items.map(
          (item, index) =>
            index < (isMobile ? 10 : isTablet ? 3 : 4) && (
              <MediaCard
                name={item.name}
                images={item.images}
                type={item.type}
                id={item.id}
                key={index}
              />
            )
        )}
      </ContainerRow>
    </>
  );
};
