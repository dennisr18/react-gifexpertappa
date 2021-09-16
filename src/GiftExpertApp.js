
import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";



export const GiftExpertApp = () => {



   const [categories, setcategories] = useState(['One Punch ' ] );


 //   const handleAdd=()=>{
   //  setcategories(cats=>[...cats,'HunterXHunter']);
    //}

    return (
        <>
       
           <h2>GiftExpertApp</h2>
           <AddCategory  setcategories={setcategories}/>
            <hr />
           


            <ol>
              {
                  categories.map( category=>(
                    
                    
                    <GiftGrid 
                    
                    key ={category}
                    category={category}
                    
                    
                    />
                  ))



              }

                             
            </ol>
        </>
    )
}
