"use client";

import { usePokemon } from "@/store/usePokemon";
import React from "react";

export default function FavoriteButton({ name }: { name: string }) {
  const favoritesPokemons = usePokemon((state) => state.favorites);
  const handleToggleFavorites = usePokemon((state) => state.ToggleFavorite);

  const isFavorite = favoritesPokemons.includes(name);

  const [label, emoji] = isFavorite
    ? ["Remove Gif from favorites", "❌"]
    : ["Add Gif to favorites", "❤️"];

  return (
    <button
      className="absolute z-50 top-3 left-3 bg-black p-2 rounded hover:bg-black/50"
      onClick={(e) => {
        e.preventDefault();
        handleToggleFavorites(name);
      }}
    >
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  );
}
