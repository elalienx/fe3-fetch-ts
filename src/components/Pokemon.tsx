// Project files
import iPokemon from "../types/iPokemon";

interface iProps {
  item: iPokemon;
}

export default function Pokemon({ item }: iProps) {
  const { name, url } = item;

  return (
    <article>
      <h2>{name}</h2>
      <p>More info clicking on this:</p>
      <a href={url} target="_blank">
        link
      </a>
    </article>
  );
}
