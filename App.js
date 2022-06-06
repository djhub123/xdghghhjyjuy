
import './App.css';
import React from 'react';
import {useSelector} from 'react-redux';
import {Routes,Route} from 'react-router-dom';
import {Headers}  from './components/Headers';
import {Login} from './components/login';
import {Blog} from './components/Blog';
import {BlogsDtails} from './components/Blogdetails';
import {UserBlogs} from './components/userBlog';
import {Postblog} from './components/Addblog';

function App() {

  const isLoggedIn=useSelector(state=>state.isLoggedIn)
  console.log('isLoggedIn:', isLoggedIn)
  return (
     <React.Fragment>
     <header>

    <Headers/>
    </header>
    <main>

   
   
    <Routes>
  
      <Route path='/login' element={<Login/>} exact/> 
      <Route path='/blogs' element={<Blog/>} exact/>
      <Route path='/myblogs' element={<UserBlogs/>} exact/>
      <Route path='/myBlogs/:id' element={<BlogsDtails/>} exact/> 
      <Route path='/blog/add' element={<Postblog/>} exact/> 
    </Routes>
    
    </main> 
   
 
 </React.Fragment> 
  )
 

}
export default App;




  


