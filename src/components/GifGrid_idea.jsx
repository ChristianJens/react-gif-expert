// Deberia recibir como propertie la categoria, ya agregare los proptypes
export const GifGrid = ({ category }) => {

    // Aca deberia hacer la peticion http al API por ejemplo esta solo es una idea
    // const gifs = [1,2,3,4,5]


  return (
    <>
        <h3>{ category }</h3>
        {/* <p>Hola Mundo</p> */}
        {/* {
            gifs.map(gif => (
                <p>{ gif }</p>
            ))
        } */}
    </>
  )
}
