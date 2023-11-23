import React from "react";

const Img = ({ width, alt, className, src}) => {
    let state = ""; 
  src? state = 'hidden': state = 'block' ;
  

  return (
    <img  src={src} width={width} alt={alt} className={[className, state]} />
  );
};

export default Img;
