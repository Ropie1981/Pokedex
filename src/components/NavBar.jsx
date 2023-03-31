const NavBar = ({ pokemonList, setPokemonIndex }) => {
  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;

/*
NavBar.propTypes = {
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  isPreviousDisabled: PropTypes.bool.isRequired,
  isNextDisabled: PropTypes.bool.isRequired,
};


const NavBar = ({ handlePrevious, handleNext, isPreviousDisabled, isNextDisabled }) => {
  return (
    <div>
      <button onClick={handlePrevious} disabled={isPreviousDisabled}>Previous</button>
      <button onClick={handleNext} disabled={isNextDisabled}>Next</button>
    </div>
  );
};


*/
