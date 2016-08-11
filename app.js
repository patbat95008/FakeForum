var app = angular.module('forum', []);

var posts = [ {postName:"Lord Kek", avatar:"F:/WebPages/FakeForum/FakeForum/FakePics/Pat.jpg", postBody:"Hey guys; what up?"}, 
    {postName:"Jei", avatar:"F:/WebPages/FakeForum/FakeForum/FakePics/Doggo1.jpg", postBody: "Doing good. U?"},
    {postName:"Anon", avatar:"F:/WebPages/FakeForum/FakeForum/FakePics/Doggo2.jpg", postBody: "     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et pulvinar massa. Mauris ultrices nulla sed est aliquet molestie. Quisque ultricies neque non turpis hendrerit dapibus.\n\n    Pellentesque suscipit, est id varius venenatis, quam tellus maximus leo, tristique dictum justo leo vitae tortor. Phasellus auctor, odio nec feugiat interdum, tortor erat lobortis ligula, nec ultrices nisl quam at turpis. Duis a tempus risus, eu vulputate lectus. Donec vulputate purus a fermentum viverra. Suspendisse consequat, erat eget mollis dictum, libero lectus tempor lacus, non tristique ex nunc non lacus. Sed posuere lacus vel mi pellentesque eleifend. Nam ut nibh sed nisi molestie porttitor. Aliquam erat volutpat. Sed sed nunc commodo, luctus dolor in, elementum sem. Praesent rhoncus libero diam, vel lobortis elit tristique a. Fusce eget facilisis tortor. Pellentesque non tortor justo."},
    {postName:"Jei", avatar:"F:/WebPages/FakeForum/FakeForum/FakePics/Doggo1.jpg", postBody: "LOL wut"}
    ];

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