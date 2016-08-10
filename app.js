var app = angular.module('forum', []);

var posts = [ {postName:"Lord Kek", avatar:"F:/WebPages/FakeForum/FakeForum/FakePics/Pat.jpg", postBody:"Hey guys; what up?"}, 
    {postName:"Jei", avatar:"F:/WebPages/FakeForum/FakeForum/FakePics/Doggo1.jpg", postBody: "Doing good. U?"}];

var title = "State of the Forum";

app.controller('ForumPost', function(){
    this.title = title;
    this.posts = posts;
});

app.controller('ReplyForm', function(){
    this.UserID="";
    this.UserPost="";
    
    
    this.reply = function (){
        posts.push({postName: userID, avatar:"", postBody: userPost});
        console.log('Clicked Post');
    }
});