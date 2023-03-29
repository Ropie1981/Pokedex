import PropTypes from "prop-types";

const NavBar = ({ handlePrevious, handleNext, isPreviousDisabled, isNextDisabled }) => {
  return (
    <div>
      <button onClick={handlePrevious} disabled={isPreviousDisabled}>Previous</button>
      <button onClick={handleNext} disabled={isNextDisabled}>Next</button>
    </div>
  );
};

NavBar.propTypes = {
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  isPreviousDisabled: PropTypes.bool.isRequired,
  isNextDisabled: PropTypes.bool.isRequired,
};

export default NavBar;
