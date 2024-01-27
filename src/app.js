const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

require("./db/conn");
const userSchema = require("./model/user")


const static_path = path.join(__dirname,"../public");

app.use(express.static(static_path));

app.use(express.urlencoded({extended : false}))

app.set("view engine","hbs");



// app.get("/",(req,res)=>{
//     // res.render("index")
//     res.send(`express is running`);
    
// });


app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/submitted", async (req,res)=>{
    try{
        const userData = new userSchema({
            Name : req.body.name,
            age : req.body.age,
            email : req.body.email,
            number : req.body.number,
            queries : req.body.queries
        })
    
        const postData = await userData.save();
        res.send(postData);
    }
    catch(err){
            
        res.send(err);
        // console.log(err)
    }


})




app.listen(port,()=>{
    console.log(`port is listining in ${port}`);
    
})