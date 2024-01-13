'use client'
import { create } from "zustand";
import {  persist } from "zustand/middleware";

type State = {
  favorites: string[];
};

type Action = {
  ToggleFavorite: (name: string) => void;
};

export const usePokemon = create<State & Action>()(
  persist(
    (set) => ({
      favorites: [],
      ToggleFavorite: (pokemonName) =>
        set((state) => {
          const draftPokemon = new Set(state.favorites);

          if (draftPokemon.has(pokemonName)) {
            draftPokemon.delete(pokemonName);
          } else {
            draftPokemon.add(pokemonName);
          }

          const newPokemons = Array.from(draftPokemon);
          return { favorites: newPokemons };
        }),
    }),
    { name: "pokemonList" }
  )
);
