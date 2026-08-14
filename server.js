const express=require('express');
const app=express();
const port=process.env.PORT || 8085;
app.use(express.static("frontend"));
app.use(express.json());
var users=[
    {
        "id":1,
        "name":"john",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/18.jpg",
    },

    {
        "id":2,
        "name":"amber",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/43.jpg",
    },

    {
        "id":3,
        "name":"lily",
        "gender":"female",
        "image":"https://randomuser.me/api/portraits/women/26.jpg",
    },

    {
        "id":4,
        "name":"juan",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/88.jpg",
    },

    {
        "id":5,
        "name":"valtteri rantala",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/5.jpg",
    },
     {
        "id":6,
        "name":"dhanush",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/19.jpg",
    },

    {
        "id":7,
        "name":"naveen",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/43.jpg",
    },

    {
        "id":8,
        "name":"abhinav",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/43.jpg",
    },

    {
        "id":9,
        "name":"jash",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/89.jpg",
    },

    {
        "id":10,
        "name":"neel",
        "gender":"male",
        "image":"https://randomuser.me/api/portraits/men/6.jpg",
    },

]

var nextId=11;

function findIndex(id){
    for(var i=0;i<users.length;i++){
        if(id===users[i].id){
            return i;
        }
    }
    return -1;
}
app.get("/api/users",function(req,res){
    return res.json(users);
});
app.get("/api/users/:id",function(req,res){
    var id=Number(req.params.id);
    var index=findIndex(id);

    if(index === -1){
        res.status(404).json({"message":"user not found with id:"+id});
    }
    var user=users[index];
    return res.json(user);
});
app.get("/api/random-user",function(req,res){
    if(users.length===0){
        return res.status(404).json({"message":"No user found"});
    }
    var randomIndex=Math.floor(users.length * Math.random());
    return res.json(users[randomIndex]);
});
app.post("/api/users",(req,res)=>{
    var newUser=req.body;
    var tempUser={
        "id":nextId,
        "name":newUser.name,
        "gender":newUser.gender,
        "image":newUser.image
    };
    nextId=nextId+1;
    users.push(tempUser);
    res.status(201).json({"message":"User created successfully","user":tempUser })
})


app.listen(port,function(){
    console.log("Server running on http://localhost:" + port);
});
