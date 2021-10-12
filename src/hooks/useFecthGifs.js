// Los Hooks por convencion empeizan con use => useEffect, useState, etc.

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs.js";

export const useFecthGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};
