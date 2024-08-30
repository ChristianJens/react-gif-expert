// Si el hook regresa un jsx element seria .jsx si no serria .js
// como luce un customHook usando shortcut rafc y le quito el return jsx, y retorno solo una objeto seria como una Funcion Comun y los Hooks no es mas que funcion que regresa algo y eso es ya esta

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Lo recibo como parametro simple de funcion no como props
export const useFetchGifs = (category) => {
  // Va ser lo mismo que tenia en GiftGrid, solo estrage la logica de cargar y manejar las imagenes
  const [images, setImages] = useState([]);
//   Creando otro estado para manejar el loading
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    // dejo de cargar
    setIsLoading( false );
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    // images: [],
    // Ahora si le envio el arreglo con mis imagenes, lo puedo verificar que las imagenes se estan recibiendo correctamente en el hook del GiftGrid components de ReactTools
    // images: images
    // Desde ECMA 6 si la propiedad tiene el mismo nombre del valor se puede escribir una sola vez
    images,
    // isLoading: true,
    isLoading
  };
};
