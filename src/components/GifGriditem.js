import React from 'react'

export const GifGriditem = ({title,URL}) => {

   // console.log(id,title,URL);
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={URL} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
