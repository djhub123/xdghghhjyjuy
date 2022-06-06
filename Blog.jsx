import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {BlogCards} from './BlogCards'

export const Blog =()=>{

    let [blogs,setblogs]=useState()
    useEffect(()=>{
        resquesData()
        // .then((data)=>console.log("data",data))
        .then((data)=>setblogs(data.blog))
        // .then((data)=>setblogs(data))
        // .then((data)=>setblogs(data.user))
    },[])


const resquesData=async()=>{
    let res=await axios.get('http://localhost:5000/api/blog')
    .catch((err)=>{console.log(err)})
    let data=await res.data;
    return data;
}

    return (
        <div >
        {blogs && blogs.map((blog,i)=>
          <BlogCards blog={blog}
           
          isUser={localStorage.getItem('userId')===blog.user}
          
     
  
          id={(blog.user)}
          />
        
        )}
        </div>
    )
}