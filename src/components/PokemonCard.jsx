function PokemonCard () {
    const pokemon = pokemonList[0].imgSrc;
    const pokemonName = pokemonList[0].name;
    return <figure>
        <div>{pokemon === undefined ? <p>???</p> : <div><img src={pokemon} alt={pokemonName}/><figcaption>{pokemonName}</figcaption></div>}</div></figure>
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

  
