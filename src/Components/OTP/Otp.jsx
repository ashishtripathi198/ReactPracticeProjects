import React, { useEffect, useRef, useState } from 'react'

const Otp = ({otpLength=6}) => {

    const [otpFields,setOtpFields]=useState(new Array(otpLength).fill(""))
    const ref=useRef([])
    console.log(ref);
    
    const handleKeyDown=(e,index)=>{
          const key=e.key;
          const copyOtpFields=[...otpFields];

          if(key=== "ArrowLeft")
          {
           if(index>=1)
          ref.current[index-1].focus();
        return;
          }
          if(key ==="ArrowRight")
          {
             if(index+1 <otpFields.length)
          ref.current[index+1].focus();

             return;
          }

          if(key==="Backspace")
          {
          console.log("Delete clicked");
          copyOtpFields[index]="";
          setOtpFields(copyOtpFields);
          if(index>=1)
          ref.current[index-1].focus();
          return;
          }


          if(isNaN(key))
          {
            return;
          }
          
          copyOtpFields[index]=e.key;
          if(index+1 <otpFields.length)
          ref.current[index+1].focus();
          setOtpFields(copyOtpFields);
    }




    useEffect(() => {
      ref.current[0].focus();
    }, [])
    
  return (
    <div className='flex justify-center items-center min-h-screen'>{
      
        otpFields.map((value,index)=>{
            return <input
            ref={(currentInput)=>(ref.current[index]=currentInput)}
            className='h-12 w-12 p-1 m-1 border-2'
            key={index} type="text" value={value} 
            onKeyDown={(e)=>handleKeyDown(e,index)}
            />
        })

    }</div>
  )
}

export default Otp