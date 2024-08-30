// Deberia ser capaz de recibir el objeto imgen completo o cada una de las propiedades de manera independiente
// export const GifItem = (props) => {
// Despues de verificar las props podria desestructurar para obtener las propiedades
// export const GifItem = ({ image }) => {
export const GifItem = ({ title, url, id }) => {
    // Verificando la salida
    // console.log(props);
    // console.log(image);
    // Yo solo necesito las propiedades title y url, pero me sale undefined porque no las estoy enviando bien
    // console.log({title, url, id});
  return (
    // <div>GifItem</div>
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

