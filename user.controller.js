// const express=require('express');
import User from '../models/user.model';
import bcrypt from 'bcryptjs';

export const allUsers=async(req,res)=>{
  let user
  try{
    user=await User.find();
   console.log('user:', user)
  }
  catch(err){
    console.error(err);
  }
  return res.status(200).json(user);
}
export const userSignup=async(req,res,next)=>{
      
         const {name,email,password}=req.body;

         let userAllReayExist;
         try{
            userAllReayExist=await User.findOne({email});
         }
          catch(err){
             return console.log(err)
          }

        //   ----validation------------
          if(userAllReayExist){
              return res.status(400).json({mess:'user allready exist'})
                      }

                    //   create user----------------
               const hashPassword=bcrypt.hashSync(password)
              const user=new User({
                  name,
                  email,
                  password:hashPassword,
                  blogs:[]
              });
              
    //   save user in data base---------------
              try{
    // ----it is inbuilt functionality of mongodb----
 await user.save();

}
catch(err){
  console.log(err) 
}
// console.log('user',user)
return res.status(201).json({user})                  
                    }
                    
                    
//  --------------------------------login------------------------                   
export const userLogin=async(req,res,next)=>{
    const {email,password} = req.body;
        
         let userAllReadRegister;
             try{
                userAllReadRegister=await User.findOne({email});
            }
         catch(err){
             console.log(err)
        }
        // ----user not found----  
        if(!userAllReadRegister){
            
            return res.status(401).json({mess:'user not found'})
        }
        // ----user exist----  
       let isPassword=bcrypt.compareSync(password,userAllReadRegister.password)
          if(!isPassword){
              return res.status(400).json({mess:'password is not correct'})
          } 
       
       return res.status(200).json({user:'login successfull',userAllReadRegister})
         }
        
