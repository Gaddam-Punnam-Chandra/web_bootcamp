// alert("welcome to web bootcamp");

var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"john.png"
    },
     {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"jane.png"
    }
]
var curId=0;
function toggleUser(){
    curId=(curId+1)%2;

    var userName=document.getElementById("user-name");
    var userGender=document.getElementById("user-gender");
    var userImage=document.getElementById("user-image");

    userName.innerHTML=users[curId].name;
    userGender.innerHTML=users[curId].gender;
    userImage.src=users[curId].image;
}

function randomUser(){
    fetch("https://randomuser.me/Api")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            var userName=document.getElementById("user-name");
            var userGender=document.getElementById("user-gender");
            var userImage=document.getElementById("user-image");

            var newuserName=data.results[0].name.first + " "+data.results[0].name.last;
            var newuserGender=data.results[0].gender;
            var newuserImage=data.results[0].picture.large;

            userName.innerHTML=newuserName;
            userGender.innerHTML=newuserGender;
            userImage.src=newuserImage;
        })
        .catch(function(err){
            console.log("error occured:"+ err);
        })
}