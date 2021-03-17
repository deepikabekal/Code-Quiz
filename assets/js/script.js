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
    btn2.className = "btn-clear";
    btn2.id = "clearHsBtn"
    btn2.style.margin = "20px";
    btn2.style.width = "200px"
    div4.appendChild(btn2);

    $("#clearHsBtn").hover(function(){
        $(this).css("box-shadow","1px 2px 4px 0px rgb(0 0 0 / 40%)");},
        function(){
            $(this).css("box-shadow", "none");
        }
    );
}

//end of high score page

//Beginning of go back

//when cicked on Go back button in high score page the main page should load

bodyContent.addEventListener("click", goBackBtnClick);

function goBackBtnClick(){

   if (event.target.matches("#goBackBtn")){
       window.location.reload();
       console.log("you clicked a go back button!");
   }

}

//end of go back 

//Beginning of Clear high score

//When clicked on clear high score button the scores should get cleared.

bodyContent.addEventListener("click", function(){
    event.defaultPrevented;
    if (event.target.matches("#clearHsBtn"))
    {
        clearHighScore();
    }
});

function clearHighScore(){
    //clear the high score in localStorage
    localStorage.clear();

    //clear the high score display on page
    var deleteScore = document.querySelector(".score-div");
    deleteScore.remove();  

    var clearScoreBtn = document.querySelector("#clearHsBtn");
    clearScoreBtn.disabled = true;

    noHighScore();
    

}

//function that will display a message if there are no score to display

function noHighScore(){

    //create a p tag
    var displayMsg = document.createElement("p");
    displayMsg.id = "display-msg";
    displayMsg.textContent = "No scores to display!";


    //display the p tag between the header and the buttons
    parentNode.insertBefore(displayMsg, ".score-button");
    bodyContent.appendChild(displayMsg);


}