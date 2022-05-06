import Link from "next/link";
import { CategoryCardContent } from "./styles";

type Props = {
  item: SpotifyApi.CategoryObject;
};

export const CategoryCard: React.FC<Props> = ({ item }) => {
  return (
    <Link href={`/categorie/${item.id}`}>
      <a>
        <CategoryCardContent theme={{ backgroundImage: item.icons[0].url }}>
          <h2>{item.name}</h2>
        </CategoryCardContent>
      </a>
    </Link>
  );
};
