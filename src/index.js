const mongoose = require('mongoose');
const express = require('express');
const app = express()

app.use('/',()=>{
    console.log('api is going to be created');
})

mongoose.connect(
    `mongodb+srv://jayshree_bawankar:12345@cluster0.sf3so.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
).then(
    app.listen(5432, ()=>{
        console.log('server connected at 5432 port');
    })
).catch(e=>{console.log(e)})