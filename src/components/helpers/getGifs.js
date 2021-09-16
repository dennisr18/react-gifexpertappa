






 export const getGifs=async(category)=>{

    const URL=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category) }&limit=10&api_key=jfWkhtXvWQJCMCYbIHPNUDmDiUXbISoY`;

     const resp= await fetch(URL);

     const {data} =await resp.json();
    
     const gifs=data.map(img=>{

        return{
            id:img.id,
            title:img.title,
            URL:img.images?.downsized_medium.url
        }

     })

     return gifs;




 }
