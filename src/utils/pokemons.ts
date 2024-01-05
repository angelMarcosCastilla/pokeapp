import { BASE_IMG_URL } from "@/config";
import { Pokemon } from "@/types/pokemon";

const getExtractId = (url: string): string => {
  const pokemonId = url.split("/").at(-2)
  return pokemonId as string
}

export const parsedPokemon = (pokemons: Omit<Pokemon, "image">[]): Pokemon[] => {
  const pokemonsParsed = pokemons.map(({ name, url }) => ({
    name,
    url,
    image: `${BASE_IMG_URL}/${getExtractId(url)}.png`
  }));

  return pokemonsParsed;
};
