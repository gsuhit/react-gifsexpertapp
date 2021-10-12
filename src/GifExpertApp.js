import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function GifExpertApp(props) {
  //const categories = ['Cat1','Cat2','Cat3'];
  const [categories, setCategories] = useState(["One Punch"]);

  // const handleAdd = () => {
  //     //setCategories('CatNew'); => No se hace asi porque cambia el arreglo del estado anterior por este solo string

  //     //setCategories( [...categories, 'CatNew'] ); //MAs facil

  //     setCategories( cats => [...cats, 'CatNew'] );
  // }

  //<button onClick={ handleAdd }>Agregar</button>
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          // <li key={category}> {category} </li>
          categories.map( category => (
            <GifGrid
                 key={category}
                 category={category} 
            />
          ))
        }
      </ol>
    </>
  );
}

export default GifExpertApp;
