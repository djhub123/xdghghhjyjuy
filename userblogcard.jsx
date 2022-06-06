import React from 'react'
import { Typography,Avatar,Card,CardContent,Box,CardHeader,IconButton } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';
import {useNavigate} from 'react-router-dom';

export const UserBlogCards = (probs,userName) => {
  let navigate=useNavigate()
  console.log('dilipprobs:', probs)
  let x=JSON.stringify(probs.blog,['user']);
  console.log('x:',x)
  let url = x
  x=/[^.]+/.exec(url)[0].substr(9,24);
 let isUser=localStorage.getItem('userId')===x;
  console.log('isUser:', isUser)
  console.log('x:',x)




  let title,discription,username,avatarname,imageurl;
  if(probs.blog!=null){
    console.log('probs:', probs)
    console.log('userName:', probs.userName)
   title=probs.blog.title;
   imageurl=probs.blog.image;
   username=probs.userName;
   avatarname=username.charAt(0);
   
   discription=probs.blog.discription

  }

  const handelEdit=(e)=>{
    navigate(`/myBlogs/${x}`)
  }
  const handelDelete=()=>{

  }
  
  return ((probs.blog!=null)?
    <div >
     
    
          <Card sx={{
           width:"40%",
           backgroundColor:'red',
           margin:'auto',
           borderRadius:2,
           mt:6,padding:2,boxShadow:'5px 5px 10px #ccc',
           ":hover":{
               boxShadow:'0.1rem 0.1rem 0.4rem 0.2rem #111'
           }}}>
           {isUser && (
             <Box display="flex">
               <IconButton onClick={handelEdit}
               sx={{marginLeft:"auto"}}>
                 <EditTwoToneIcon></EditTwoToneIcon>
               </IconButton>
               <IconButton onClick={handelDelete}>
                 <DeleteSweepTwoToneIcon
                 
                 ></DeleteSweepTwoToneIcon>

               </IconButton>
             </Box>
           )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
            {avatarname}
          </Avatar>
        }
       
        title={title}
        subheader="September 14, 2016"
      />
      
      <CardMedia
        component="img"
        height="auto"
        image={imageurl}
        // image="https://images.pexels.com/photos/51953/mother-daughter-love-sunset-51953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>{username}</b> {":"}{discription}
        </Typography>
      </CardContent>
      
    </Card>
</div>:'null'
  )
}