import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import axios from 'axios';
const Post = () => {
  const [data,setData]=useState([]);
  const [pageNo,setPageNo]=useState(6);
  useEffect(()=>{
     axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`).then((res)=>setData(res.data));
    
  },[pageNo])
  return (
    <div>
        <div className='w-[550px] h-[170px] flex justify-evenly'>
          {
            data?.map((item,index)=>{
                 return <img className='h-[150px] w-[100px]  rounded-xl' 
                 key={item.id} src={item.download_url}/>
            })
          }
        </div>
        <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}

export default Post