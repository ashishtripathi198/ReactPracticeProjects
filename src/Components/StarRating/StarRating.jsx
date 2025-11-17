import React, { useState } from 'react'

const StarRating = ({starCount=5}) => {
   const [starValue,setStarValue]=useState();
   const [hoverValue,setHoverValue]=useState();
   
   
  return (
    <div className='flex justify-center items-center min-h-screen'>
        {
            new Array(starCount).fill(0).map((value,index)=>{
                return <span 
                onClick={()=>setStarValue(index+1)}
                onMouseEnter={()=>setHoverValue(index+1)}
                onMouseLeave={()=>setHoverValue(0)}
                className={`${hoverValue==0 && index<starValue || index <hoverValue ? "text-yellow-500":""}`} key={index} >&#9733;</span>
            })
        }
    
    </div>
  )
}

export default StarRating