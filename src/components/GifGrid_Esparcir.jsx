
import { useEffect, useState} from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
// Usualmente se tiene un orden jerarquico de importaciones, 1 react, las importaciones de terceros, luego nuestro codigo, y por ultimo funciones que no son propiemente componentes o hooks

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  useEffect(()=>{
    getImages()
  }, [ ]);


  return (
    <>
      <h3>{category}</h3>
      {/* Ya no es necesario el ol ya que no tengo li pero lo transformare en div, agregare la clase css pero no lo puedo hacer mediante la propiedad class como en html ya que en js class se usa para clases, lo que tengo que usar es className en React */}
      {/* <div class='card-grid'> */}
      <div className="card-grid">
      {/* <ol> */}
        {/* { images.map( ({id, title}) => (
          // <li key={ id }>{ title }</li>
          // Aunque son dos lineas es mejor crear un componente especializado para mostrar estas tarjetas, se esta quejando porque no le paso el key ahora se lo pao
            // <GifItem />
            <GifItem key={ id } />

        )) } */}
        {/* Hare el cambio para enviar el objeto completo imagen a mi componente con todas las propiedades esta es una manera de hacerlo*/}
          {
            images.map((image) => (
              <GifItem 
                key={ image.id } 
                // image={ image }
                // Tendria que enviar uno por uno
                // title={ image.title }
                // url={ image.url }
                // ** PATRON DE ESPARCIR las propiedades a la hora de trabajar con mis componentes, porque yo se que tengo que enviar el title y el url, uso el operador SPREAD para esparcir el image es decir esparcir todas las propiedades que vengan en el image, lo podemos verificar en los reactTools, de manera que mi componente recibe las propiedades del objeto como properties, esto es super util si tengo mas porpiedades en mi objeto por ejemplo unas 100
                { ... image}
              />
            ))
          }
      {/* </ol> */}
      </div>
    </>
  );
};