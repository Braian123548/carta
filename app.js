const express = require('express');
const app = express();
const path = require('path');
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3030

app.use(express.static('public'));

app.listen(port,()=>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
})

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "views", "index.html"))
})
