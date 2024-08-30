// Shotcut rafc
// Las Aplicaciones en React son un conjunto de componentes eso es todo no es mas complicado que eso un componente tiene otros componentes dentro y asi se va armando la aplicacion.

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  // Quiero mantener el listado de categorias que busque y que este sea persistente, cuando quieres almacenar informacion y esa informacion tiene que cambiar el html, usualmente lo primero que deberias de pensar es ok necesito algun hook de React para mantener el estado.

  // ** Regla de Oro: No puedes poner un state o estado o ningun hook, dentro de una condicional porque React pierde la referencia posicional de los estados, no pngas condicionalmente tus hooks, tambien se recomienda que tengas x catindades de states de acuerdo a la cantidad de variables de state que necesites.
//   if (true) {
//     const [categories2, setCategories2] = useState(["One Punch","Dragon Ball",]);
//   }

  // usando snippets useStateSnnipet y le cambio el nombre con categories en plural
  // const [categories, setCategories] = useState();
  // Si lo dejas asi el valor inicial sera undefined, que puede causar inconvenientes, ojo realizar la importacion de useState de react, voy a inicializarlo con un arreglo
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  //   Si tendria mas de un estado, en las herramienstas de desarrollo usaria la varita para diferenciar los estados uno del otro.
  //   const [categories2, setCategories2] = useState(["One Punch", "Dragon Ball"]);
  //   const [categories3, setCategories3] = useState(["One Punch", "Dragon Ball"]);

//   console.log(categories);

// Tarea:
// Agregar elemento a las categorias
    const onAddCategory = () => {
        // Solucion Christian Jens
        // Valorant
        // const newList = [...categories, 'Valorant'];
        // console.log(newList);
        // setCategories(newList);
        // Primero visualizo lo que quiero insertar
        // categories.push('Valorant');
        // Prueba agregar pero el estado no cambia, porque sigue haciendo referencia a la direccion del listado en memoria, el push es usado para mutar un objeto y quiero evitar las mutaciones en React, evita por ahora usar el push, lo que debo de hacer es crear un nuevo estado
        // Para crear un nuevo estado uso la funcion setCategories lo primero es crear un nuevo arreglo
        // setCategories(['Hola Mundo']);
        // Pero yo no quiero solo que salga hola mundo, lo que yo quiero es que se agregue a mis anteriores categorias
        // para ello puedo usar el operador SPREAD, que hace una copia del listado de categorias y al final le añado la nueva
        // setCategories([...categories, 'Valorant']);
        // otra variante si lo quieres insertar al inicio pon primero el valor y luego el listado
        setCategories([ 'Valorant', ...categories ]);
        // Otra forma de hacerlo, es usando el callback que se le puede enviar a setCategories
        // setCategories( cat => [...cat, 'Valorant'] );
    }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp </h1>

      {/* Input, deberia esta en un componente aprate para que podamos escribir manipularlo */}
      {/* TENER EN CUENTA PRINCIPIOS DE RESPONSABILIDAD UNICA, TRABAJA TUS COMPONENTES DE MANERA SEGMENTADA */}
      {/* <input type="text" /> */}
      {/* Usando mi componente segmentado, tambien puedo enviarle properties al componente hijo, pero no te limites a enviar string booleanos si no tambien puedo enviar funciones, verificables en la reactTools en components */}
      {/* <AddCategory /> */}
      {/* <AddCategory hola="mundo" /> */}
      {/* Enviando la funcion setCategories que me permita actulizar el estado del padre, tambien podria enviar onAddCategory se puede hacer de varias maneras */}
      {/* <AddCategory setCategories={ setCategories } categories={categories} /> */}
      {/* No es necesario enviar las categories */}
      <AddCategory setCategories={ setCategories } />
      {/* Al enviar solo el setCategories que es una funcion de tipo setState, no tiene mucho sentido semantico, lo ideal seria que el AddCategory deberia emitir el valor que quiero insertar */}


      {/* Puedo crear cuantas quiera veces el componente */}
      {/* <AddCategory />
      <AddCategory /> */}

      {/* Listado de Items d Gifs */}
      {/* **OJO la funcion se llama sin parentesis ya que no necesita parametro */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      {/* Para crear el listado usare un order list */}
      <ol>
        {/* <li>ABC</li>
            <li>123</li>
            <li>XYZ</li> */}
        {/* barriendo categorias con el map de JS y una funcion de flecha, en consola muestra el error de proporcionar un key unico al iterar un conjunto de elementos, ademas en el html React crea un marker para indicar que eso lo contruyo dinamicamente */}
        {categories.map((category) => {
          //   return <li>Hola</li>;
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Notar que en las herramientas de desarrollador en components podemos observar que aprarece el estado, los estados no llevan nombre si no que estan basados en la posicion, pero si le hago click en la varita magica la herramienta pondra la referencia al nombre del estado */}
      {/* Gif Item */}
    </>
  );
};

// Como estructuro mi fileSystem (mi estructura de directorios) o mi proyecto, la mas comun es usar carpetas de componentes y otras API, La que usaremos por modulos y funcionalidad por ejmplo una carpeta solo para productos, otra para gifs, otra para autenticacion.
