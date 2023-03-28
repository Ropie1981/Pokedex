function PokemonCard ({name, imgSrc}){
return imgSrc === undefined ? <div><p>???</p><figcaption>{name}</figcaption></div> : <div><img src={imgSrc} alt={name}/><figcaption>{name}</figcaption></div>;
}


export default PokemonCard;



  
