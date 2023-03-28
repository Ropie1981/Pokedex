function PokemonCard () {
    const pokemon = pokemonList[1].imgSrc;
    const pokemonName = pokemonList[1].name;
    return <figure>
        <div>{pokemon === undefined ? <div><p>???</p><figcaption>{pokemonName}</figcaption></div> : <div><img src={pokemon} alt={pokemonName}/><figcaption>{pokemonName}</figcaption></div>}</div></figure>
}

export default PokemonCard;

const pokemonList = [
    { 
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  
