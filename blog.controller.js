
import mongoose from 'mongoose';
import Blog from '../models/blog.model'
import User from '../models/user.model'

export const allBlogs=async(req,res)=>{
    let blog;
    try{
      blog=await Blog.find().populate('user')
    }
    catch(err){
        console.log(err)
    }
    if(!blog){
        return res.status(404).json({message: 'no blog is threr'})
    }
    return res.status(200).json({blog})
} 




export const addBlogs=async(req,res)=>{
    const {title,discription,image,user}=req.body;
    let existinguser;
    try{
        existinguser=await User.findById(user)
    }
    catch(err){
       return console.log(err)
    }
    if(!existinguser){
return res.status(400).json({mess:"unable to find by id "})

    }

   
    const blog=new Blog({
        title,
        discription,
        image,
        user,
    });
    try{
    // await blog.save();
    const session=await mongoose.startSession();
    session.startTransaction();
    await blog.save({session});
    existinguser.blog.push(blog);
    await existinguser.save({session});
    await session.commitTransaction();
}
    catch(err){
        return console.log(err)
        // return res.status(500).json({mess:"error is there"})
    }
    // if(!blog){
    //     return res.status(404).json({message: 'something went wrong!'})
    // }
    console.log(blog)
    return res.status(200).json({blog})
} 

export const editBlog=async(req,res)=>{
    const {title ,discription}=req.body;
   const blogId=req.params.id;
   let blog;
   try{

       blog=await Blog.findByIdAndUpdate(blogId,
        {title,discription})
    }catch(err){
        console.error(err);
    }
    if(!blog)
    return res.status(500).json({mess:"unable to edit your blog"})

    return res.status(200).json({mess:"Blog Updated successfully"})
}
export const getBlogId=async(req,res)=>{
    const id=req.params.id;
  let blogId;
  try{
     blogId = await Blog.findById(id);
  }
  catch(err){
      console.log(err)
  }
  if(!blogId) 
  return res.status(404).json({mess:'blog not found'});
  return res.status(200).json({blogId});
}
export const delBlog=async(req,res)=>{
    const id=req.params.id;
  let blog;
  try{
     blog = await Blog.findByIdAndRemove(id).populate('user');
     console.log('blog:', blog)
     await blog.user.blogs.pull(blog);
     await blog.user.save();
  }
  catch(err){
      console.log(err)
  }
  if(!blog) {
      return res.status(404).json({mess:'unable to delete'});

  }
  return res.status(200).json({mess:'blog delete successfully'});
}

export const getByUserId=async(req,res)=>{
  const userId=req.params.id;
   let userBlogs;
   try{
   userBlogs = await User.findById(userId).populate('blog');
   }
   catch(err){
       console.log(err);
   }
   if(!userBlogs){
       return res.status(404).json({mess:'no blogs found'})
    }
    return res.status(200).json({userBlogs})
}