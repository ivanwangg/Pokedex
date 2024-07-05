'use client'
import React, {useState, useEffect} from "react";
import PokeImage from "./components/pokeImage";
import LeftStat from "./components/leftStat";
import RightStat from "./components/rightStat";

export default function Home() {
  const [id, setId] = useState(1);
  const [pokemonJSON, setPokemonJSON] = useState(null);
  const [pokeName, setPokeName] = useState(null);
  const [pokeEXP, setPokeEXP] = useState(null);

  const URL = "https://pokeapi.co/api/v2/pokemon";

  async function getAPI(id) {
    try {
      let response = await fetch(`${URL}/${id}/`);
      const pokeJSON = await response.json();
      setPokemonJSON(pokeJSON);
      setPokeName(pokeJSON.name.toUpperCase())
      setPokeEXP(pokeJSON.base_experience)
    } catch (error) {
      console.error("Error fetching data: ", error);
      setPokemonJSON(null);
      setPokeName(null);
      setPokeEXP(null);
    }
  }

  useEffect(() => {
    getAPI(id);
  }, [id])

  return (
    <main>
      <div className="flex flex-col justify-between w-screen h-screen font-mono bg-white">
        <div className="flex flex-col justify-between h-[10%] shadow-sm bg-green-400">
          <p className="text-white ml-1 text-sm">
            PokéDex
          </p>
          <div className="flex flex-row justify-between items-end w-screen pl-4 pr-4 pb-2">
            <button className="text-white font-bold text-[25px] max-h-8" onClick={() => {
              if (id !== 1) {
                setId(id - 1)
              }
            }}>
              &#60;-
            </button>
            <p className="text-white text-2xl font-medium text-[30px] max-h-8">
              PokéDex
            </p>
            <button className="text-white font-bold text-[25px] max-h-8" onClick={() => {
              setId(id + 1)
            }}>
              -&#62;
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-screen h-[10%]">
            <p className="text-black text-[30px]">
              {pokeName}
            </p>
            <p className='flex flex-row bg-green-400 text-white pr-2 pl-2 rounded-md'>
              Base Experience: {pokeEXP}
            </p>
        </div>
        <div className="flex flex-row justify-between items-center w-screen h-2/3">
          <LeftStat json = {pokemonJSON}/>
          <PokeImage json = {pokemonJSON}/>
          <RightStat json = {pokemonJSON}/>
        </div>
        <div className="w-screen h-[2%] bg-green-400"></div>
      </div>
    </main>
  );
}
