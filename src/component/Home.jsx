// Pokedex.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonDetails from './PokemonDetails';
import pokeball from '../assets/pokeball.png'
const Home = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=50');
        const results = response.data.results;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);
            return detailsResponse.data;
          })
        );

        setPokemonData(pokemonDetails);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    // setLoading(false)
  };

  return (
    <>
    {isLoading ? (
      <div className="flex flex-col h-screen justify-center items-center gap-5">
        <img className='w-36 h-36 rotate-spin' src={pokeball} alt="pokeball" />
        <span className='text-3xl'>Loading....</span>
        </div>
    ) : (
    <div className="flex justify-center flex-col sm:flex-row items-center h-screen w-full overflow-hideen gap-10 p-20">
        {/* <h1 className=" font-bold  text-7xl">Pokedex</h1> */}
      <div className="flex justify-center items-center w-full flex-col sm:flex-row sm:-w-1/2 p-4 flex-wrap pt-10 gap-10 h-screen overflow-auto">
          {pokemonData.map((pokemon) => (
            <div
            key={pokemon.id}
            onClick={() => handlePokemonClick(pokemon)}
            className="p-4 border w-48 h-48 flex flex-col justify-center items-center border-gray-300 rounded cursor-pointer hover:shadow-md transition"
            >
              <p className="text-xl font-bold mb-2 capitalize">{pokemon.name}</p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                className="w-24 h-24 hover:scale-125 transition-all duration-100  
                ease-out"
              />
            </div>
          ))}
      </div>
      { selectedPokemon && (
        <div className="h-full w-3/2  font-display ">
          <PokemonDetails pokemon={selectedPokemon} />
        </div>
      ) }
    </div>
          )}
    </>
  );
};

export default Home;
