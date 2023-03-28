import PropTypes from "prop-types";

function PokemonCard ({name, imgSrc}){
return imgSrc === undefined ? <div><p>???</p><figcaption>{name}</figcaption></div> : <div><img src={imgSrc} alt={name}/><figcaption>{name}</figcaption></div>;
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
};
  

export default PokemonCard;



  
