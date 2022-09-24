export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6qv8BHmTF0vlWT8Q4cYY31u6dJNJ532g&q=${category}&limit=10&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log(gifs)
    return gifs;
}