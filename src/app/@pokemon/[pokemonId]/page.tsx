import LoadingSpinner from "@/components/LoadingSpinner";
import Modal from "@/components/Modal";
import { api } from "@/services";
import React, { Suspense } from "react";

export const dynamic = "force-dynamic";

interface Props {
  params: { pokemonId: string };
}

async function FetchingPokemons({ name }: { name: string }) {
  const pokemon = await api.pokemons.getByName(name);

  return (
    <article>
      <header className="flex justify-center ">
        <img
          className="size-52"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`image of  ${pokemon.forms.name}`}
        />
      </header>
      <img
        src={pokemon.sprites.other.dream_world.front_default}
        alt={`image of  ${pokemon.forms.name}`}
        className="absolute top-0  left-[50%] translate-x-[-50%] -z-10 blur-3xl size-[260px]"
      />
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
