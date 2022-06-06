import { useEffect,useState } from "react";
import axios from "axios"
import {UserBlogCards} from './userblogcard'
export const UserBlogs =()=>{
    let [data,setdata]=useState();
    let [newdata,setnewdata]=useState([]);
    let [userName,setuserName]=useState();

    const id=localStorage.getItem('userId');
    
    
    const sendRequest=async()=>{
        let res=await axios.get(`http://localhost:5000/api/user/${id}`)
        .catch(err=>console.log(err));
        let data=await res.data;
        // console.log('data:', data)
        return data;
    }
    useEffect(()=>{
        sendRequest()
        .then((data)=>{
            setdata(data)
            setnewdata(data.userBlogs.blog)
            setuserName(data.userBlogs.name)
        })
        
        .catch(err=>console.log(err));
        // .then((data)=>console.log('user',data))
    },[])
    // if(!data.userBlogs.name){

    //     console.log('data:', 'not')
    // }else{
    //     console.log('data:', data.userBlogs.name)

    // }
    console.log('newdata:', newdata.length)
    console.log('newdata:', newdata)
    console.log('name:', userName)
    // data.blog.map((blo,i)=>{
    //     console.log('data:',i,blo) 
    // })
    return (
        <div style={{backgroundColor:'#ccc1'}}>
          <h1>My Blogs.... {userName}</h1>
       

    {
        (newdata.length>0)?
        <div>
        
        {newdata.map((blog,i)=>
         <UserBlogCards  key={i} 
         blog={blog}
         userName={userName}
        
         
         />
          )}</div>:
        <div>

         <UserBlogCards  blog={null}/>
        </div>
        }
        
        </div>
    )
}