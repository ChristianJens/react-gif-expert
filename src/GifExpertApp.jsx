import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
// Usando archivo de barril, si hace referencia a components es redundante /components/index
// import {} from './components/index'
// Desde ahi ya me permite hacer la importacion en una sola linea
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {
  // const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);
  // Para evitar todo el monton de ruido en mi peticion http, solo voy a iniciar con una sola categoria.
  const [categories, setCategories] = useState(["One Punch"]);


  const onAddCategory = (newCategory) => {
    // Validando que la nueva categoria existe en el arreglo, si existe salgo de la funcion, para react los valores mayuscula y minuscula son distintos si quisiera mas estricto podria usar un fine en la busqueda de las categorias, y pasar todos los valores a lowercase
    if (categories.includes(newCategory)) return;
    // eslo mismo que se hace solo como el if tiene una sola linea, se puede simplificar como arriba
    // if (categories.includes(newCategory)) {
    //   return;
    // }

    // console.log(newCategory);
    // Puedo verificar que ya estoy recibiendo el valor del input de mi componente <AddCategory /> aqui entonces ya puedo usar la insercion
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp </h1>

      {/* <AddCategory setCategories={ setCategories } /> */}
      {/* Enviamos la funcion que inserta la nueva categoria pero oculta la implementacion del mismo, es mas dificil de comprender para otros como funciona mi componente, no es malo pero lo que comumente esperaran que mi compoenente emita el valor ya validado, es decir que solo me mande el valor a insertar, para que el componente padre pueda tomar ese valor e insertarlo  */}
      <AddCategory
        // setCategories={ setCategories }
        // Usualmente cuando lleva la palabra "ON" es porque esta emitiendo algo, es algo muy comun en los eventos, como es que quiero que funcione que reciba el evento y es que voy a utilizar en mi funcion para agrgarlo al listado
        // onNewCategory={event => onAddCategory(event)}
        // Puedo cambiarle el nombre por value del primer argumento, no importa el nombre si es posicional, notar que onNewCategory es una propiedad de mi componente AddCategory eso es todo, revisandolo en componentes de ReactTools el prop de mi componente dice que es una funcion ya no dice que es una funcion de State simplemente dice que es una funcion
        onNewCategory={(value) => onAddCategory(value)}

        // Enviando el listado de categorias para su validacion que seria la otro opcion, pero una mejor idea es que solo este componente emita el nuevo valor y en la funcion, onAddCategory hago la validacion de duplicados antes de insertarlo
        // currentCategories={ categories }
      />
      {/* Usualmente vamos a querer que nuestros componentes hagan un unico trabajo y lo hagan bien, por ejemplo AddCategory lo unico que hace es crear un input y emitir su valor cuando la persona haga enter eso es todo su trabajo  */}

      {/* <ol> */}
        {/* Si sabes JS supondrias si el error esta aqui solo haria falta poner la i del indice y ya esta solucionado, pero en React y su equipo dice NO HAY QUE USAR EL i, tienes que usar un identificador unico ya sea el id, o algo que sea unico en la iteracion, no hay que usar i, porque react usa el valor de la llave para saber que elemento se elimino, y react podria confundirse y nos mostraria informacion que no estamos esperando */}
        {/* Es bueno que trates de pensar las cosas antes de empezarlas a programar, mi arreglo va a tener mas lineas ya que va tener mas elementos html como el titulo y las imagenes el return va retornar un objeto  */}
        {/* // return <li key={i}>{category}</li>;
          // Pero el key lo tiene que tener el elemento que se va iterar es decir el div, dijeras mejor uso un fragment <></> pero el fragment no puede usar el key={} */}
        {/* {categories.map((category) => {
          return (
            <div key={category}>
              <h3>{ category }</h3>
              <li>{ category }</li>
            </div>
          );
        })} */}
        {/* NOTAR: Que la funcion, solo tiene un return y regresando un objeto por lo que se puede oviar, el return y las llaves, es usual verlo asi, aqui lo que decimos es que estamos retornando este objeto entre parentesis */}
        {/* {
          categories.map((category) => (
            <div key={category}>
              <h3>{category}</h3>
              <li>{category}</li>
            </div>
          ))
        } */}
        {/* En lugar de regresar todo el objeto voy a regresar mi componente, nota que mi codigo queda mucho mas facil de leer, incluso lo puedo poner en una sola linea */}
        {
          // categories.map((category) => (<GifGrid category={category} />))
        }
        {/* usualemente es mejor dejarlo en varias lineas, notar que react ya sabe que tengo que tener un key en la iteracion a pesar de que yo no lo indico en mi componente hijo */}
        {
          categories.map((category) => (
            <GifGrid 
              key={category} 
              category={category} 
            />
          ))
        }
        {/* Ahora el ol order list ya no tiene razon de ser ya no deberia existir loquito */}
      {/* </ol> */}
      {/* VISUALIZA EL PROBLEMA: Yo tengo que crearme un componente que me sirva para agrupar todos los elementos que son de la misma categoria para que sea facil de mantener el día de mañana, es decir un COMPONENTE QUE SE ENCARGUE UNICAMENTE DE MOSTRAR UNA CATEGORIA */}
    </>
  );
};
