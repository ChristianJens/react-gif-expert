import { useState } from "react";

// export const AddCategory = ({setCategories, categories}) => {
// NO es necesario que importes la lista de categorias
export const AddCategory = ({ setCategories }) => {
  // CADA COMPONENTE PUEDE TENER SU PROPIO ESTADO, sus propios hooks su propios useState, necesito manejar el estado (los datos) de este input cuando la persona como vaya escribiendo necesito tener sus valores
    // const [inputValue, setInputValue] = useState("One Punch");
  //   Puedo quitar el valor por defecto ya que realice la comprobacion, OJO: dejar con el valor por defecto string vacio si no le pones string vacio da error "Warning: A component is changing an uncontrolled input to be controlled..."
  const [inputValue, setInputValue] = useState('');

  //   Creando funcion para el onChange
  /* const onInputChange = (event) => {
    // console.log(event);
    // Ver la ultima tecla que toque, si estoy recibiendo el cambio ahi
    console.log(event.target.value);
    // setInputValue("Hola Mundo");
    // Para que cambie en el input
    setInputValue(event.target.value);
  }; */
  
  //   Puedo usar la desestructuracion
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  /*   return (// Aqui yo voy a crearme un componente especializado para manejar el input, es mas va ser un miniformulario, cuando presione enter deberia captar el valor, podria hacerlo detectando el keypress del enter pero lo haremos de manera tradicional con un form
    
    <input
      type="text"
      placeholder="Buscar gifs"
      // Quiero que sea el valor por defecto de input, pero me muestra error en consola, y no me deja escribir, lo explica en la consola que no hay un manejador de onChange y por eso es de solo lectura
      value={inputValue}
      //   Implementando el onChange
      //   onChange={onInputChange}
      //   Esto luce asi estoy recibiendo el evento como parametro
      //   onChange={(event) => onInputChange(event)}
      //   Como estoy recibiendo un parametro que lo unico que hago es enviarlo a la funcion como parametro puedo oviar la funcion flecha
      onChange={onInputChange}
    /> } */

  // Creando la funcion para evitar que se envie mi formulario
  const onSubmit = (event) => {
    // console.log(event);
    // Pude ver el evento pero cuando se refresco la pagina desaparece, podria activar el presevLog o mantener el registro de las herramientas de desarrolladores, en el engranage
    // NO quiero que la pagina se refresque
    event.preventDefault();

    // Validando que no ingrese valores vacios, podria hacerlo mayor pero tendria que hacer el cuerpo de la funcion, pero de esta forma es mas facil de leer
    if (inputValue.trim().length <= 1) return;

    // Informacion que voy a usar para actualizar la informacion en el padre
    // console.log(inputValue);
    // Ya tengo la funcion setCategories del padre TAREA: necesito setCategories(...., inputValue) qyengo que hacer lo mismo que en el padre, agregar el valor del input sin perder el listado
    // setCategories([inputValue]);
    // Sobreeescribo el arreglo y pierdo los otros datos, este es uno de los casos en los cuales es conveniente que esta funcion que nos ofrece el useState nos permita mandarle un CALLBACK en lo que tenemos las categorias
    setCategories((categories) => [inputValue, ...categories]);
    // Limpiar inputvalue o nuestra caja de texto
    setInputValue("");
  };

  // Usando el form tradicional para fines educativos al hacer click hace un fullrefresh de la pagina, porque ese es compoertamiento por defecto del formulario

  // <form onSubmit={(event)=> onSubmit(event) }>
  {
    /* Puedo resumir codigo ya que el parametro recibido es el enviado, debes priorizar que nuestro codigo sea facil de leer */
  }
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      {/* Podria tener mas inputs, no uso fragment <></> ya que solo estoy retornando un elemento que es el formulario, si tuviera elementos del mismo nivel, es decir hermanos si tendria que usar fragment ya que siempres tiene que tenr un elemento de rango mayor padre */}
      {/* <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      /> */}
    </form>
    // Estamos haciendo que los cambios sucedan en una sola via, evitar el twodatabonding, siguiendo los principios de React
  );
};
