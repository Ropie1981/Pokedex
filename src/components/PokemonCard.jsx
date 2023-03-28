function PokemonCard ({name, imgSrc}){
return imgSrc ? <div><img src={imgSrc} alt={name}/><figcaption>{name}</figcaption></div> : <div><p>???</p><figcaption>{name}</figcaption></div>;
}


export default PokemonCard;



  
