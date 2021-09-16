import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
 import { GifGriditem } from './GifGriditem'; 
/* import { getGifs } from './helpers/getGifs'; */

export const GiftGrid = ({category}) => {

//  const [images, setimages] = useState([]);
           const {data:images,loading} = useFetchGifs(category);

        

   /* useEffect(  ()=>{
       getGifs(category)
       .then(setimages);
   },[category]) */


    
    

  

    return (
      <>
        <h3 className="animate__animated animate__fadeIn"> {category}</h3>
         {loading && <p className ="animate__animated animate__flash">Loading.....</p>}
       
      <div className="card-grid">
           
               {
                   images.map(img=>(
                     <GifGriditem
                      key={img.id}
                     {...img}
                     />
                   ))
               }
           
      
        </div>
        </>
    )
}
