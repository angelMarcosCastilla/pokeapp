interface Pokemon {
  name: string;
  url: string;
  image: string;
}

interface PokemonAPI {
  count: number;
  next: string | null;
  previus: string | null
  results: Omit<Pokemon, "image">[]
}

export type Pokemons = Pokemon[]