// Funcion fuera del componente considerado como mejor practica
/* const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=8X0IpT4NoRz2eizkgpud51IGNoy2xevS&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
}; */

// Ahora la importo del archivo que cree.
import { useEffect,/* , useState */ 
useState} from "react";
import { getGifs } from "../helpers/getGifs";

// Separare la basura de arriba de mi componente que se ve bastante limpio, en un nuevo archivo dentro de una carpeta que llamare helpers, Mi componente ahora es mucho mas limpio facil de leer, facil de mantener

export const GifGrid = ({ category }) => {

  // Estoy tentado a tener un estado local en este componente GifGrid, para mantener estas imagenes y este estado se mantiene y es preservado cuando se redibuja el componente, lo inicializamos como un arreglo bacio, tambien se puede inicializr con valor booleano false o null, nos puede servir para no mostrarlo hasta que tenga imagenes ya veras esto nos servira para hacer nuestro map, para establecer las imagenes yo tengo que hacer uso de setImages
  const [images, setImages] = useState([]);

  // Para demostracion creo un nuevo estado, y cada vez que toco el boton se vuelve a dispara la funcion getGifs
  // const [counter, setCounter] = useState(10);
  
  
  // ** NUNCA: debes de colocar la ejecucion de una funcion directamente dentro de un FuncionalComponent, cada ve que el Componente se va a volver a ejecutar, esta funcion se va a volver a ejecutar en consecuencia va a volver la peticion http, en teoria una vez recibido la categoria la funcion se debe ejecutar una unica vez no importa si el componente actualiza, hay redibujos no deberia volver a disparar la peticion,
  
  // getGifs(category);



  // ** RESOLVIENDO EL PROBLEMA: una de las formas es usando el hook "useEffect", no uses el snippet hasta que comprendas como funciona, este hook de React sirve para disparar efectos secundarios, se entiende algun proceso que quieras ejecutar cuando algo suceda, ejemplo cuando el counter cambie yo quiero disparar algun efecto, cuando la categoria cambie quiero disparar un efecto, cuando el componente se renderiza por primera vez quiero disparar unefecto
   // CUANDO EL COMPONENTE SE CARGUE POR PRIMERA VEZ SOLO AHO QUIERO DISPARAR LA PETICION HTTP, el use effect recibe dos parametros una collback (cualquier funcion) y luego una lista de dependencias que son las condiciones con las cuales quieren volver a ejecutar este collback que es un arreglo con mis dependecias si lo dejo vacio [] significa que este hook solo se va disparar la primera vez que se crea y se construya mi componente, comprobamos que si presiono en +1 se actuliza el estado pero no se vuelve a realizar las peticiones, si realizo un nueva busqueda se vuelve a realizar la busqueda pero estos son los resultados relacionados con la bsqueda pero porque pasa esto, porque en el componente GifExpertApp cada vez que tengo una nueva categoria, se crea un nuevo componente GifGrid, pero no los anteriores ya que estban creados y se mantienen en el estado catefories, por eso se ejecuta una sola vez cuando se crea el componente
   /* useEffect( ()=> {
    // getGifs(category);
    // Mas adelante veremos que el useEffect tambien tiene un return que se le conoce como cleanup, el return que pongas aca esta destinado para hacer limpieza en el caso de que este useEffect tenga un observable o alguna funcion que este pendiente de los cambios
    // Tentando la TAREA, como es una promesa uso await
    getGifs(category);
  }, [ ]) */

  // Tentando la TAREA, como es una promesa uso await
  /* useEffect( async ()=> {
    // getGifs(category);
    // Mas adelante veremos que el useEffect tambien tiene un return que se le conoce como cleanup, el return que pongas aca esta destinado para hacer limpieza en el caso de que este useEffect tenga un observable o alguna funcion que este pendiente de los cambios
    
    const newImages = await getGifs(category);
    setImages(newImages);
  }, [ ]) */

  // ** Funcion asyncrona
  const getImages = async () => {
    const newImages = await getGifs( category );
    setImages(newImages);
  }

  // ** CUIDADO: useEffect no le gusta que se le pase una Promesa es decir usar async ya que el useEffect espera una funcion no una promesa uy ni modo hay varias formas usando el then puede que no te guste como se ve el codigo de esta forma y otra forma es que crees una funcion por aparte llamada "getImages" esta funcion si puede ser asincrona
  /* useEffect(()=>{
    // Como es una promesa puedo usar el then y ahi establecer las imagenes
    getGifs(category)
      .then(newImages => setImages(newImages))
  }, [ ])  */
  // ** Llamando a la funcion para que no se ejecute x veces esto si es perfectamente permitido
  useEffect(()=>{
    getImages()
  }, [ ]);

  // Sia aculizo el estado, caeria en un ciclo infinito, ya que al cambiar el estado el componente se volveria a redibujar y esto me dara el error de "Error: Too many re-renders", porque setCounter le dice a React ok cuando termines te vuelves a redibujar
  // setCounter(counter + 1);

  return (
    <>
      <h3>{category}</h3>
      {/* <h5>{ counter }</h5>
      <button onClick={()=> setCounter(counter + 1)}>+1</button> */}
      {/* TAREA: Mostrar las imagenes */}
      <ol>
        {/* images.map... */}
        {/* <li>Titulo</li>
        <li>Titulo</li>
        <li>Titulo</li>
        <li>Titulo</li> */}
        {/* TAREA, la primera vez como es un arreglo bacio no hara nada, al recorrer el arreglo huso el retorno implicito */}
        {/* { images.map( image => (
          <li key={ image.id }>{ image.title }</li>
        )) } */}
        {/* Que fue usar image.id puedo usar la desestructuracion */}
        { images.map( ({id, title}) => (
          <li key={ id }>{ title }</li>
        )) }
      </ol>
    </>
  );
};

// NOTA: para comprobar como se ve la aplicacion en produccion primero genere la aplicacion de distribucion con el comando "yarn build" notar que los archivos han sido optmizados en formato gzip para que sea mas rapido, luego instale http-server con el comando "npm install --global http-server" y luego me dirigi a la carpeta de distribucion creada por el comando build llamada dist, dentro de la carpeta dist, ejecuto el comando "http-server -o" para que abra la aplicacion y verla como funciona en produccion