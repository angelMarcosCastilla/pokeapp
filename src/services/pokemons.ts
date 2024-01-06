import { PokemonAPI } from "@/types/pokemon";

export const pokemons = {
  getAll: async (): Promise<PokemonAPI> => {
    const responses = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=200&offset=0"
    );
    const data  = await responses.json();
    return data
  },

  getByName: async (name: string): Promise<any> =>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json();
    return data
  }
}