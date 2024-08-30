// Funcion fuera del componente considerado como mejor practica
const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=8X0IpT4NoRz2eizkgpud51IGNoy2xevS&q=${ category }&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))
  return gifs;
}


// Deberia recibir como propertie la categoria, ya agregare los proptypes
export const GifGrid = ({ category }) => {

  // Url con la descripcion del Endpoint a llamar https://developers.giphy.com/docs/api/endpoint#search que debe de ser el de search, antes de empezarlo a programar la peticion, hay que probarlo ysaber como funciona el endpoint para ello usa un Cliente HTTP como Postman o Insomnia el url api.giphy.com/v1/gifs/search?api_key=8X0IpT4NoRz2eizkgpud51IGNoy2xevS trae 0 data y responde con codigo status 200 que lo hizo bien, pero es que aun me falta el query como parametro que es el termino de busqueda y quedaria asi: "api.giphy.com/v1/gifs/search?api_key=8X0IpT4NoRz2eizkgpud51IGNoy2xevS&q=valorant" de los datos usare el id, la url, y el title

  // ** PENSAR: Observa la funcion getGifs, esta ubicada dentro de mi componente realmente es necesari que este aqui, ya que solo esta amarrada al componente por la category que tranquilamente puede mandarse como parametro!!! entonces puedo sacarla fuera o en archivo por separado ESTO ES CONSIDERADO COMO UNA BUENA PRACTICA, ya que mi componente a volverse a renderizar no asignara un nuevo espacio en memoria a la funcion.

  // En TEORIA creare una funcion aqui, pero cuando sepas mas de React sabras que no es una buena practica. creando la funcion para que este aqui centralizada, no necesito ningun argumento, porque la category ya la tengo aqui a la mano y deberia obligar a que la categoria siempre venga lo voy a hacer mediante los proptypes
  /* const getGifs = async () => {

    // Este es la url que llamaremos
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8X0IpT4NoRz2eizkgpud51IGNoy2xevS&q=${ category }&limit=20`;
    // Ahora realizare la peticion http
    const resp = await fetch( url );
    // Verificando que tendre de respuesta

    // Voya desestructurar la data que necesito, le agrego los corchetes para asegurarme que siempre tenga data
    // const { data = [] } = await resp.json();
    // Pero tambien funciona sin los corchetes
    const { data } = await resp.json();


    // Ahora visualizo la data, y verifico que me trae 50 imagenes es demasiado prefiero trabajar con 20 imagenes, para eso uso el parametro "limit" que me proporciona la documentacion del api, (Nota en GrafthQl si puedes escoger que campos quieres en la respuesta del API) veo mucha informacion, asi funciona este REST API pero solo me interesa el id, title y url de la imagenes puedo usar un el map porque yo se que este es un arreglo
    // console.log(data);
    // const gifs = data.map(gif => {
    //   // Voy a retornar un objeto con las propiedades que a mi me interesan
    //     return {

    //     }
    // })
    // OJO Si mi funcion solo retorna una solo objeto, puedo usar los parentesis y oviar el return y las llaves {}
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }))

    // Visualizare los gifs
    console.log(gifs);

    // console.log(resp);
    // ** NOTA: Observa que si hago una nueva busqueda se repite la peticion al el doble cada vez, de los anteriores nuevamente, yo no quiero que eso suceda si no que solo se haga una peticion con cada busqueda que hago, despues de quitar el ruido y comenzar con una sola categoria observo que tengo dos response por consola eso esta bien.

  } */

  // Voy a llamar inmediatamente el componente se crea voy a llamar a la funcion, OJO ESTO ES UNA PESIMA PRACTICA, pero por ahora lo dejo asi.
  getGifs(category);
  // Ahora que la funcion esta afuera puedo mandar la categoria como una parametro
 

  return (
    <>
        <h3>{ category }</h3>
        
    </>
  )
}
