const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const express = require('express')
const clgRoute = requie('../Router/clgRoute.js')

const app = express();
app.use(bodyParser.json())
app.use('/clg',clgRoute)

mongoose.connect(
    `mongodb+srv://jayshree_bawankar:12345@cluster0.sf3so.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
).then(
    app.listen(5000, ()=>{
        console.log('Server Connected at port 5000');
    })
).catch(e=>console.log(e))



