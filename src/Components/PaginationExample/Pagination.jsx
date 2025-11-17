import React from 'react'

const Pagination = ({pageNo,setPageNo}) => {

  const preThreeNoArr=Array.from({length:3},(_,index)=>pageNo-1-index).filter((value)=>value>0).reverse()
  console.log(preThreeNoArr);
  const nextFourNo=Array.from({length:4},(_,index)=>pageNo+index)
  console.log(nextFourNo);
  const paginationArray=[...preThreeNoArr,...nextFourNo];
  const handleNext=()=>
  {
        setPageNo(pageNo+1);
        console.log(pageNo);
        
  }


  const handlePrevious=()=>{
         setPageNo(pageNo-1);
  }
  return (
    <div className='flex w-[550px] justify-evenly'>
      {
        pageNo>1 &&  <div className='bg-black text-white rounded-xl p-3 '
       onClick={()=>handlePrevious()}
        >
         {"<"}
        </div>
      }
        {
          paginationArray.map((value)=>{
             return <div
             onClick={()=>value !=pageNo && setPageNo(value)}
             key={value} className={` ${pageNo ===value? "bg-white text-black":"bg-black text-white"} border-2 rounded-xl p-3 hover:scale-95 transition-transform`}>
          {value}
        </div>
          })
        }
         <div className='bg-black text-white rounded-xl p-3 cursor-pointer'
          onClick={()=>handleNext()}
         >
          {">"}
        </div>
    </div>
  )
}

export default Pagination