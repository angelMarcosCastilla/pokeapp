import { api } from "@/services";
import { parsedPokemon } from "@/utils/pokemons";
import Link from "next/link";

export default async function Home() {
  const data = await api.pokemons.getAll();
  const pokemons = parsedPokemon(data.results);
  return (
    <>
      <section className="grid grid-cols-3 max-w-[1000px] mx-auto gap-4">
        {pokemons.map((pokemons) => (
          <Link
            href={`/${pokemons.name}`}
            key={pokemons.name}
            className="overflow-hidden relative h-[200px] grid place-content-center border "
          >
            <img
              className="blur-3xl  h-[300px]  "
              src={pokemons.image}
              alt={`image of ${pokemons.name}`}
            />
            <div className="absolute top-[50%] translate-y-[-50%] flex flex-col items-center justify-center w-full  z-50">
              <h2>{pokemons.name}</h2>
              <img src={pokemons.image} alt={`image of ${pokemons.name}`} />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
