import { useState } from 'react';
import axios from 'axios';
import {Typography,Tabs,Tab,AppBar, Toolbar,Box,Button, TextField} from '@mui/material';
import { useDispatch } from 'react-redux';
import {authActions} from '../store/store.js'
import { useNavigate } from 'react-router-dom';

export const Login =()=>{
    const navgate=useNavigate();
    const dispatch=useDispatch();
    const [isSignup,setisSignup]=useState(false);
    const [inputs,setinputs]=useState({
        name:"",email:"",password:"",
    });
    const handleChange=(e)=>{
      setinputs((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value
      }));
    }

    const sendRequest=async(type='login') =>{
         let response=await axios.post(`http://localhost:5000/api/${type}`,{
              name:inputs.name,
              email:inputs.email,
              password:inputs.password,
          })
          .catch(err=>{console.log(err)});
          let data=await response.data;
          console.log('data:', data)
          return data;
    }
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(inputs);
      if(isSignup){
          sendRequest('signup')
          .then(data=>localStorage.setItem('userId',data.userAllReadRegister._id))
  
          .then(()=>dispatch(authActions.login()))
          .then(()=>navgate('/blogs'))
          .then(data=>console.log("thensignupdata",data))
          
        }else{
            sendRequest()
            .then(data=>localStorage.setItem('userId',data.userAllReadRegister._id))
            
            .then(()=>dispatch(authActions.login()))
            .then(()=>navgate('/blogs'))
            .then(data=>console.log("data",data))
        }
            
    }
    return (
   <div >
   <form action="" onSubmit={handleSubmit}  >
       <Box maxWidth={400}
       display='flex' flexDirection={'column'}
       alignItems='center' justifyContent='center'
       boxShadow='10px 10px 20px #ccc'
       padding={3}
       margin={'auto'}
       marginTop={8}
   
       >
           <Typography variant='h3'
           padding={3}
           textAlign='center'>
          {isSignup?'Signup':'Login'}
           </Typography>
           {isSignup &&
           <TextField onChange={handleChange} value={inputs.name} name='name' margin='normal' placeholder='Name'/>}
           <TextField onChange={handleChange} value={inputs.email} name='email' type={'email'} margin='normal' placeholder='Email'/>
           <TextField onChange={handleChange} value={inputs.password} name='password' type={'password'} margin='normal' placeholder='Password'/>
   
           <Button type='submit'
           variant='contained'
           sx={{borderRadius:3}}
            color='warning'>Submit</Button>
           
           
           
           <Button onClick={()=>setisSignup(!isSignup)}
            sx={{borderRadius:3,marginTop:3}} color='warning'
           >Change to {isSignup?'Login':'Signup'}</Button>
       </Box>
   </form>
   </div>
    )
}