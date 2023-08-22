const express = require("express")
const app = express()
app.use(express.json())


let userList=[
    {
        id:1,
        name:"John",
        email:"john@gmail.com"
    },
   
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
app.put("/users",(req,res)=>{
    const {id} = req.body;
    const newUser = req.body;
    userList.forEach((user,index)=>{
        if(user.id === id){
            userList[index]=newUser;
        }
    })
    res.json(userList);
})
app.delete("/users",(req,res)=>{
    const {id} = req.body;
    userList.forEach((user,index)=>{
        if(user.id === id){
            userList.splice(index,1);
        }
    })
    res.json(userList);
})
app.listen('3001',(req,res)=>{
    console.log("Server is running on port 3001")

});