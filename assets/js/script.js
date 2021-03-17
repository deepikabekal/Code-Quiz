var bodyContent = document.querySelector("body")
var container = document.querySelector("#container");
var highScore = document.querySelector("#score");

//when clicked on the high score link the user should be navigated to the high score page
highScore.addEventListener("click",function(){
    event.preventDefault();
    highScoreHtml();
})

//function that loads the HTML for high score page
function highScoreHtml(){

    //clear content
    container.innerHTML="";
}