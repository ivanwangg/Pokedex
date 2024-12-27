'use client'
import React, {useState, useEffect} from "react";
import PokeImage from "./components/pokeImage";
import LeftStat from "./components/leftStat";
import RightStat from "./components/rightStat";
import SearchBar from "./components/searchBar";
import TopBar from "./components/topBar";

export default function Home() {
  const [id, setId] = useState(1);
  const [pokemonJSON, setPokemonJSON] = useState(null);
  const [pokeName, setPokeName] = useState(null);
  const [pokeEXP, setPokeEXP] = useState(null);
  const [loading, setLoading] = useState(true);

  const URL = "https://pokeapi.co/api/v2/pokemon";

  async function getAPI(id) {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAPI(id);
  }, [id])

  return (
    <div className="flex flex-col w-full h-full justify-start font-mono">
      <TopBar id={id} onClick={setId}></TopBar>
      {loading ? (
        <div className="flex flex-row justify-center items-end w-full h-[65rem] text-xl text-green-400">
          Loading...
        </div>
      ) : (
      <div className="flex flex-col w-full h-full justify-start">
        <div className="flex flex-col justify-center items-center w-full mt-3 mb-1 lg:mb-6">
            <p className="sm:text-[1.875rem]">
              {pokeName}
            </p>
            <p className='flex flex-row bg-green-400 text-white px-2 rounded-md'>
              Base Experience: {pokeEXP}
            </p>
        </div>
        <SearchBar onClick={setId}></SearchBar>
        <div className="flex flex-col w-full justify-center items-center lg:flex-row">
          <LeftStat json = {pokemonJSON}/>
          <PokeImage json = {pokemonJSON}/>
          <RightStat json = {pokemonJSON}/>
        </div>
      </div>)}
      <div className="flex flex-col justify-end w-full h-full mt-4">
        <div className="w-full h-[1rem] bg-green-400"></div>
      </div>
    </div>
  );
}
