//import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, { useState } from 'react';


function App() {

const [isDarkOn, setDarktIsOn] = useState(false)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const appClass = isDarkOn ? "App dark" : "App light"



  function screenMode(){
    setDarktIsOn(!isDarkOn)
  }
  



  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={screenMode}>{isDarkOn ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

// <div className="App dark">
// {/* for dark mode */}
// </div>

// <div className="App light">
// {/* for light mode */}
// </div>







// import React from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {

//   // replace 'false' with a state variable that can be toggled between true and false
//   // this will be used for the Dark Mode Toggle feature
//   const appClass = false ? "App dark" : "App light"

//   return (
//     <div className={appClass}>
//       <header>
//         <h2>Shopster</h2>
//         <button>Dark Mode</button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;
