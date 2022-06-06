
import mongoose from 'mongoose';

const schema=mongoose.Schema;

const blogSchema=new schema({

     title:{
         type: String,
         required: true,
     },
     discription:{
         type: String,
         required: true,
     },
     image:{
         type: String,
         required: true,
     },
     user:{
         type:mongoose.Types.ObjectId,
         ref:"user",
         required: true,
     }
})

export default mongoose.model('blog',blogSchema);