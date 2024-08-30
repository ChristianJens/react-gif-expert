import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {
 
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    
    setInputValue(target.value);
  };

  
  const onSubmit = (event) => {
    
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    // setCategories((categories) => [inputValue, ...categories]);
    // Lo que voy a llamar a onNewCategory y le voy a mandar el valor del input, voy a mandar el input limpio aunque se repite el trim pero hay que tratar de priorizar la lectura de nuestro codigo, es mas sencillo que recordar como se inerta en el otro componente
    onNewCategory( inputValue.trim() );

    // ** En el caso que estarias modificando el state, y otro state con las funciones set..., antes en react 17 el componente se renderizaria dos veces, pero en react 18 se ejecuata los dos set... y despues recien se vuelve a renderizar el componente y eso hace a React mas rapido de lo que lo era antes
    // setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
