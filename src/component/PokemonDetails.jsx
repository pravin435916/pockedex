import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  const typeColors = {
    grass: 'green',
    fire: 'red',
    water: 'blue',
    bug: 'yellow',
    electric: 'yellow',
    psychic: 'purple',
    ice: 'teal',
    ghost: 'indigo',
    dragon: 'orange',
    normal: 'gray',
    fighting: 'brown',
    poison: 'purple',
    ground: 'brown',
    rock: 'gray',
    flying: 'indigo',
    steel: 'gray',
    fairy: 'pink',
    dark: 'black',
  };


  const primaryType = pokemon.types[0]?.type.name || 'unknown';
  const bgColor = typeColors[primaryType] || 'gray'; 

  return (
    <div style={{ backgroundColor: bgColor }} className="flex flex-col justify-center items-center w-80 h-full rounded-md p-8 shadow-md gap-8 relative">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-48 h-48 animate-bounce " />
      <span className="text-3xl font-bold text-white mb-4 uppercase">{pokemon.name}</span>
      <div className="flex gap-4 text-white flex-col items-center">
        <span className="text-xl rounded-full border px-2">{pokemon.types[0].type.name}</span>
        <span className="text-xl">Height: {pokemon.height}</span>
        <span className="text-xl">Weight: {pokemon.weight}KG</span>
      </div>
      <div className="flex flex-col gap-2 items-center text-white">
        <span className="text-xl font-semibold">Types: {pokemon.types.map((type) => type.type.name).join(', ')}</span>
        <span className="text-xl">Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</span>
      </div>
    </div>
  );
};

export default PokemonDetails;
