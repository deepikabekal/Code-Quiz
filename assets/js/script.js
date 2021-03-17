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

    var div1 = document.createElement("div");
    div1.className = "main-container"
    document.body.appendChild(div1);
    console.dir(div1);
    
    
    var div2 = document.createElement("div");
    div2.className = "row"
    div1.appendChild(div2);
    console.dir(div1);


    var heading1 = document.createElement("h1");
    heading1.textContent = "High Scores";
    div2.appendChild(heading1);
}