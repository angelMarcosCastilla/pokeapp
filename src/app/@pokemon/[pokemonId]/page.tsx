import RadarChartPokemon from "@/components/Charts/RadarChart";
import LoadingSpinner from "@/components/LoadingSpinner";
import Modal from "@/components/Modal";
import { api } from "@/services";
import type { PokemonDetails } from "@/types/pokemon";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

interface Props {
  params: { pokemonId: string };
}

async function FetchingPokemons({ name }: { name: string }) {
  const pokemon: PokemonDetails = await api.pokemons.getByName(name);

  return (
    <article className="flex justify-between items-center ">
      <header className="flex items-center gap-y-2 justify-center flex-col ">
        <img
          className="size-48"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`image of  ${pokemon.name}`}
        />
        <h2 className="text-xl">{pokemon.name}</h2>
      </header>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={`image of  ${pokemon.name}`}
        className="absolute left-0   -z-10 blur-3xl size-[260px]"
      />
      <div> 
        <div className="w-[450px] h-[450px]">
          <div className="w-full h-full">
            <RadarChartPokemon name={pokemon.name} data={pokemon.stats} id={pokemon.id} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function Page({ params: { pokemonId } }: Props) {
  return (
    <Modal
      className="max-w-[800px] relative bg-black border  w-[90%] p-7 z-[80] h-[500px]"
      hrefClose="/"  
    >
      <Suspense fallback={<LoadingSpinner />}>
        <FetchingPokemons name={pokemonId} />
      </Suspense>
    </Modal>
  );
}
