import React from "react";
// import { getGifs } from "../helpers/getGifs";
import { useFecthGifs } from "../hooks/useFecthGifs";
import { GridGifItem } from "./GridGifItem";

export const GifGrid = ({ category }) => {
   
  const {data:images, loading} = useFecthGifs();

  //console.log(state);
  // console.log(images);
  // console.log(loading);

  return (
    <>
      <h3 className='card animate__animated animate__fadeIn'>{category}</h3>
      
      { loading && <p className='card animate__animated animate__flash'>Cargando...</p> }
      
     

      <div className="card-grid">
         
         {images.map((element) => (
           <GridGifItem key={element.id} {...element} />
         ))}
      </div>
    </>
  );
};

//Original sin Custom Hook
//-------------------------
// import React, { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
// import { GridGifItem } from "./GridGifItem";

// export const GifGrid = ({ category }) => {
//   const [count, setcount] = useState(0);

//   const [images, setimages] = useState([]);

//   //Se usa useEffect para que no se repita la llamada a esta funcion por cada evento del click del boton
//   //Asi como esta se ejetuca la funcion solo la primera vez que renderiza
//   useEffect(() => {
//     getGifs( category )
//     .then ( imgs => setimages(imgs));
//   }, [ category ]);  //Si va [] solo una iunica vez hace esto sino cada vez que cambia categoria

// //   const getGifs = async () => {
// //     const url =
// //       `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=BeQ6U31hvFCX71uqlP5qbx7tELhL9zqp`;

// //     const resp = await fetch(url);
// //     const { data } = await resp.json();

// //     const gifs = data.map((img) => {
// //       return {
// //         id: img.id,
// //         title: img.title,
// //         url: img.images?.downsized_medium.url,
// //       };
// //     });

// //     //console.log(gifs);
// //     setimages(gifs);
// //   };

//   //getGifs();

//   return (
//     <>
//       <h3>{category}</h3>
//       <div className="card-grid">
//         {/* <ol>
//             {
//                 images.map( element => {
//                    //return <li key={element.id}>{element.title}</li>;
//                    <GridGifItem img={element} />
                    
//                 })
//             }
//             <li>item</li>
//         </ol> */}
//         {images.map((element) => (
//           <GridGifItem key={element.id} {...element} />
//         ))}

//         <h4>{count}</h4>
//         <button onClick={() => setcount(count + 1)}></button>
//       </div>
//     </>
//   );
// };
