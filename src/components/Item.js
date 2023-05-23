//import React from "react";
import React, {useState} from 'react';

function Item({ name, category }) {

const [isInCart, setInCart] = useState(false)


// const appClass = isDarkOn ? "App dark" : "App light"
const cartClass = isInCart ? "in-cart" : ""

function handleCart(){
  setInCart(!isInCart)
}


  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{isInCart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;














 //import React from "react";


// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;