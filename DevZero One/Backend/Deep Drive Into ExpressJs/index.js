const express = require("express")
const app = express()

app.get("/", (req, res)=>{
    res.send('Welcome to ExpressJs')
})
app.get("/about", (req, res)=>{
    res.send("I am about")
})
app.get("/contact", (req, res)=>{
    res.send("I am a contact section")
})








app.listen(5000,()=>console.log("listening on port 5000!"))