import { api } from "@/services";
import { parsedPokemon } from "@/utils/pokemons";
import Link from "next/link";
import dynamic from "next/dynamic";

const FavoriteButton = dynamic(() => import("@/components/FavoriteButton"), {
  ssr: false,
});

export default async function Home() {
  const data = await api.pokemons.getAll();
  const pokemons = parsedPokemon(data.results);
  return (
    <>
      <section className="grid grid-cols-3 max-w-[1000px] mx-auto gap-4">
        {pokemons.map((pokemons) => (
          <article key={pokemons.name} className="relative">
            <FavoriteButton name={pokemons.name} />
            <Link
              href={`/${pokemons.name}`}
              scroll={false}
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
          </article>
        ))}
      </section>
    </>
  );
}
