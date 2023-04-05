import PokemonCard from "./components/PokemonCard"

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

function App() {
  return (
      <PokemonCard {...pokemonList[0]}/>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
};

export default App;

