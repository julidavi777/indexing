import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ title, floor, total, alt, className, src }) => {
  let state = "";
  let rounded = "w-full rounded-full mx-auto"
  src ? (state = "hidden") : (state = "block");
    
  return (
    <Link to="/satoshi-show">
      <div className="text-center">
        <h1>{title}</h1>
        <div className="rounded ">
        <img src={src} width="100" alt={alt} className={[className, state, rounded]} />
        </div>
        <div className="flex justify-around p-3 px-5">
          <div>
              Floor
            <div>{floor}</div>
          </div>
          <div>
              Total Vol
            <div>{total}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;