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

    //displaying high scores
    var div3 = document.createElement("div");
    var textBox = document.createElement("input");
    div3.className="score-div";
    div1.appendChild(div3); 
    textBox.setAttribute("type", "text");
    textBox.setAttribute("value", "hello world");
    textBox.id = "score-text"
    textBox.disabled = true;
    div3.appendChild(textBox);

    //adding button go back
    var div4 = document.createElement("div");
    div4.className = "score-button";
    div1.appendChild(div4);

    
    var btn1 = document.createElement("button");
    btn1.innerHTML = "Go Back";
    btn1.id = "goBackBtn"
    btn1.className = "btn";
    btn1.style.margin = "20px";
    div4.appendChild(btn1);
    console.dir(btn1);

    //adding button clear hihg score

    var btn2 = document.createElement("button");
    btn2.innerHTML = "Clear High Score";
    btn2.className = "btn";
    btn2.style.margin = "20px";
    btn2.style.width = "200px"

    div4.appendChild(btn2);
}

//end of high score page