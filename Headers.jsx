import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Typography,Tabs,Tab,AppBar, Toolbar,Box,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import {authActions} from '../store/store.js'
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import './Header.css'
export const Headers = () => {
  let user=localStorage.getItem(['useName'])
  console.log('user:', user)
  let dispatch=useDispatch()
  let [value,setvalue]=useState();
  const isLoggedIn=useSelector(state=>state.isLoggedIn)
  return (
    <div>
     <AppBar sx={{backgroundColor:
     'linear-gradient(90deg, rgba(31,0,36,1) 0%, rgba(65,3,50,1) 32%, rgba(121,9,113,1) 54%, rgba(6,93,58,1) 90%, rgba(0,212,255,1) 100%, rgba(25,6,92,1) 100%, rgba(8,148,204,1) 100%)'
     ,borderRadius:1,
     marginTop:0.1
     }}
       
        position="fixed">
<Toolbar>
  <Typography variant="h4" sx={{marginLeft:1}}>
  <FilterVintageOutlinedIcon variant="h3"
   className='dilip'></FilterVintageOutlinedIcon>
  {/* <WorkspacesOutlinedIcon className='dilip'></WorkspacesOutlinedIcon> */}
  </Typography>
  <Typography sx={{marginLeft:1}} variant="h5">
  Blogs
  </Typography>
{isLoggedIn && <Box marginLeft="auto" marginRight='auto'>
  <Tabs value={value} 
  textColor='inherit' onChange={(e,val)=>setvalue(val)}>

    <Tab LinkComponent={Link} to='/myblogs' label="my blogs" ></Tab>
    <Tab LinkComponent={Link} to='/blogs' label="all blogs"></Tab>
    <Tab LinkComponent={Link} to='/blog/add' label="Postblog"></Tab>
    {/* <Tab LinkComponent={Link} to='/blog/details' label="Postblog"></Tab> */}
  </Tabs>
  </Box>
}
  <Box display='flex' marginLeft='auto' >
  {!isLoggedIn && <> <Button sx={{margin:1, borderRadius:5}} variant='contained' 
    color='primary' backgound='red'
    LinkComponent={Link} to='/login' >Login</Button>
    <Button sx={{margin:1, borderRadius:5}} variant='contained' 
    color='primary'
    LinkComponent={Link} to='/myblog'>Signup</Button>
  </>}
   {isLoggedIn && 
   <>

   <InsertEmoticonOutlinedIcon
   sx={{marginTop:2,marginRight:2}}
   >{'user'}</InsertEmoticonOutlinedIcon>
   <Button 
   onClick={()=>dispatch((authActions.logout()))}
   sx={{margin:1, borderRadius:5}} variant='contained' 
    color='primary'
    LinkComponent={Link} to='/login' >Logout</Button>
   </>
   }
  </Box>
</Toolbar>
     
     </AppBar>
    </div>
  )
}


