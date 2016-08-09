var app = angular.module('forum', []);

var post = {postName: "", avatar: "", postBody: ""}

var posts = [ {postName:"kek", avatar:"/FakePics/Pat.jpg", postBody:"Hey guys"}, {postName:"Foo", avatar:"/FakePics/Doggo1.jpg", postBody: "Doing good. U?"}]

app.controller('ForumPost', function(){
    this.posts = posts;
});