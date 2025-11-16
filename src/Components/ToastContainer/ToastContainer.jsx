import React, { useRef, useState } from 'react'

const ToastContainer = () => {
  const [toasts ,setToasts]=useState([]);
  const timeRef=useRef({})
  const handleClose=(id)=>{
     console.log(timeRef);
   
    clearInterval(timeRef.current[id])
    delete timeRef.current[id];
   setToasts((prevToasts)=>{
    const filterToasts=prevToasts.filter((toast)=>{
       return toast.id !==id;
    });
    return filterToasts;
   })
  }
  
  const handleAdd=(Message,Type)=>{
    
    
    const id=new Date().getTime();
    const newToastList=[...toasts,{id,Message,Type}]
    setToasts(newToastList);

    timeRef.current[id]=setTimeout(()=>handleClose(id),5000)
  }

  return (
  <div className='flex items-center justify-center min-h-screen'>
   
   <div className="fixed top-0.5 right-0.5  ">
   {  toasts.map(({id,Message,Type})=>{
    return <div key={id} className={`slideInAnimate  

    ${Type === "success" ? "bg-green-500" : ""}
    ${Type === "info" ? "bg-blue-500" : ""}
    ${Type === "warning" ? "bg-orange-500" : ""}
    ${Type === "error" ? "bg-red-500" : ""} w-xs  p-4 text-white rounded-xs relative mb-1`}>
      {Message}<span onClick={()=>handleClose(id)} className='absolute right-1 cursor-pointer'>X</span>
    </div>
   })}
   </div>
    <div className='flex gap-4'>
        <button 
        className='p-1 border-2 bg-green-500 text-white'
        onClick={()=>handleAdd("Success","success")}
        >
          Success Toast
        </button>

        <button 
        className='p-1 border-2 bg-blue-500 text-white'
         onClick={()=>handleAdd("Info","info")}
        >
          Info Toast
          </button>
        <button className='p-1 border-2 bg-orange-500 text-white'
        onClick={()=>handleAdd("Warning","warning")}
        >Warning Toast
        </button>
        <button className='p-1 border-2 bg-red-500 text-white'
        onClick={()=>handleAdd("Error","error")}
        >Error Toast
        </button>
    </div>
  </div>
  )
}

export default ToastContainer