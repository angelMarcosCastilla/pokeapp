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

export interface Stats {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  }
}

interface ISprites {
  other: {
    dream_world: {
      front_default: string 
    }
  }
}
export interface PokemonDetails {
  stats: Stats[]
  name: string
  sprites: ISprites
  id: number
}
export type Pokemons = Pokemon[]