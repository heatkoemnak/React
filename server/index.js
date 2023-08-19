const express = require("express")
const app = express()
app.use(express.json())


let userList=[
    {
        id:1,
        name:"John",
        email:"john@gmail.com"
    },
    // {
    //     id:2,
    //     name:"Jack",    
    //     email:"jack@gmail.com"
    // },
    // {
    //     id:3,
    //     name:"Sok",
    //     email:"sok@gmail.com"
    // },
    // {
    //     id:4,
    //     name:"Jane",
    //     email:"jane@gmail.com"
    // },
]

app.get("/users", (req, res) => {
    res.json(userList);
    // res.send("Hello World")
    
});
app.post("/users",(req,res)=>{
    const newUser = req.body;
    userList.push(newUser);
    res.json(userList);
})
app.listen('3001',(req,res)=>{
    console.log("Server is running on port 3001")

});