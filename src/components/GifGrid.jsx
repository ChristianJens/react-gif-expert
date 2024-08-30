
// import { useEffect, useState} from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
// Custom Hook, que voy a crear desde cero y van a tener algun tipo de relacion con algun estado o voy a reutilizarlo ciertas funcionalidades del mismo puede ser razones para usar un customHooks, ayuda a ahorrar mucho codigo, DRY dont repeat your self.

export const GifGrid = ({ category }) => {

  // Creando Custom Hook o HOOK PERSONALIZADO, parte del estandar de los hooks es que inicie con use, le paso la categoria y aqui deberia ser capaz de recibir lo que quiero es decir las images isloading. y todo el codigo de abajo se envio al useFetchGifs y va terminar como una sola linea de codigo
  const { images, isLoading } = useFetchGifs( category );
  // Verificando la recepcion
  // console.log({images, isLoading});
  // OJO funciona a la primera porque cuando inicio es lista bacia, pero cuando caambia el estado redibuja nuevamente el componente
  // Visualizando el loading
  // console.log(isLoading);

  return (
    <>
      <h3>{category}</h3>
      {/* La idea es poner esto de manera condicional basado en isloading, cuando tenemos imagenes isLoading esta en false son exluyentes, hay varias maneras usando className = {isLoading ? 'hidden'} el elemento html siempre existiria yo no quiero que exista si no estoy cargando */}
      {/* <h2>Cargando...</h2> */}
      {/* Hay dos formas */}
      {/* Primera */}
      {/* {
        isLoading
        // Usando parentesis para el return implicito, aunque los parentesis son opcionales pero asi queda bien claro caso contrario pongo un null que no se renderiza en React
        ? (<h2>Cargando...</h2>)
        : null
      } */}
      {/* Pero estoy usando un ternario y pasando un null, esto tal vez no se mira tan bien o puede confundir una mejor forma es un If corto, si isLoading esta en true va ejecutar la segunda parte de la condicion, si isLoading esta en false ya no continua, esto es mas facil de leer */}
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      {/* Otra forma seria crear un componente <LoadingMessage isLoading={ isLoading } /> este componente haria internamente la logica para mostrarse o no con el loading que le envio */}
     
     {/* El div se crea aunque no haya imagenes asi que lo dejare */}
      <div className="card-grid">
          {
            images.map((image) => (
              <GifItem 
                key={ image.id } 
                { ... image}
              />
            ))
          }
      </div>
    </>
  );
};