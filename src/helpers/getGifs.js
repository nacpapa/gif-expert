export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=yfnmkokrGgQ8ko4pjtbNSXws7TeQbUqH`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      // EL SIGNO DE INTERROHACION HACE QUE SEA CONDICIONAL, SI TRAE IMAGENES CARGA EL URL, SINO NO
      url: img.images?.downsized_medium.url,
    };
  });
  console.log(gifs);
  return gifs;
};
