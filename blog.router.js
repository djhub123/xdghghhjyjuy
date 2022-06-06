import express from 'express';

import {allBlogs,addBlogs,editBlog,getBlogId,delBlog,getByUserId}
 from '../controllers/blog.controller';


const blogrouter=express.Router();

blogrouter.get('/blog',allBlogs);
blogrouter.post('/blog',addBlogs);
blogrouter.put('/blog/edit/:id',editBlog);
blogrouter.get('/:id',getBlogId);
blogrouter.delete('/:id',delBlog);
blogrouter.get('/user/:id',getByUserId);

export default blogrouter;