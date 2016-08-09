var app = angular.module('forum', []);

var post = {postName: "", avatar: "", postBody: ""}

var posts = [ {postName:"Lord Kek", avatar:"F:/WebPages/FakeForum/FakeForum/FakePics/Pat.jpg", postBody:"Hey guys; what up?"}, 
    {postName:"Jei", avatar:"F:/WebPages/FakeForum/FakeForum/FakePics/Doggo1.jpg", postBody: "Doing good. U?"}];

app.controller('ForumPost', function(){
    
    this.posts = posts;
});