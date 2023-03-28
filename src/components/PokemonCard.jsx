function PokemonCard () {
    const pokemon = pokemonList[0].imgSrc;
    return <figure>{pokemon === undefined ? <p>???</p> : <img src={pokemon}/>}</figure>
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

  
