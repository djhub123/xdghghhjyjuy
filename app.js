import express from 'express';
import mongoose from 'mongoose';
const Port =process.env.PORT || 5000;
import cors from 'cors';
import router from '../Backend/routers/user.router';
import blogrouter from '../Backend/routers/blog.router';

const app=express();
app.use(cors())
app.use(express.json())

app.use('/api',router);
app.use('/api',blogrouter);


mongoose.connect('mongodb+srv://admin:KsZOGNptf9eNpsQ0@cluster0.cnnj6n7.mongodb.net/Blog?retryWrites=true&w=majority')
.then(()=>app.listen(Port))
.then(()=>console.log('port is connected 5000'))
.catch((err)=>console.log(err))

// KsZOGNptf9eNpsQ0