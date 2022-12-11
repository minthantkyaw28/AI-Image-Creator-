const express=require('express');
const dotenv=require('dotenv').config();

const port=process.env.PORT || 5000;

const app=express();

app.use('/openai',require('./routes/openaiRoutes'));

//Starting the server
app.listen(port,function(){
    console.log(`Server Started On Port ${port}`);
})