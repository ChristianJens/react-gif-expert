// Notar el nombre no comienza con mayuscula ya que no es componente, y porque js porque tiene codigo puro de JS, no se te olvide que si quiero usar esta funcion en otro lugar la tengo que exportar
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8X0IpT4NoRz2eizkgpud51IGNoy2xevS&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    // console.log(gifs);
    return gifs;
  };