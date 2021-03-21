var bodyContent = document.querySelector("body")
var container = document.querySelector("#container");
var highScore = document.querySelector("#score");

var score = 0;
var  userScore= [];

//array of objects for question and answer
var questions = [
    {q:"Commonly used data types Do Not include:", ans: ["1. Strings", "2. booleans", "3. alerts", "4. numbers"]},
    {q:"The condition in an if/else statement is enclosed with <span>   </span>. ", ans: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"]},
    {q:"Arrays in javascript can be used to store <span>   </span>.", ans: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"]},
    {q:"String values must be enclosed within <span>   </span> when being assigned to variables.", ans: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"]},
    {q:"A very useful tool used during development and debugging for printing content to the debugger is: ", ans: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"]}

];

var score = 0;
var correctAnswer = [
    {q:0, a:"3. alerts"},
    {q:1, a:"3. parenthesis"},
    {q:2, a:"4. all of the above"},
    {q:3, a:"3. quotes"},
    {q:4, a:"4. console.log"}

];
var questionNumber = 0;

//disable the timer textbox
var timerTextBox = document.querySelector("#timer");
timerTextBox.disabled = true;

//when clicked on the high score link the user should be navigated to the high score page
highScore.addEventListener("click",function(){
    event.preventDefault();
    highScoreHtml();
});

//function that loads the HTML for high score page
function highScoreHtml(){

    //clear content
    container.innerHTML="";

    var div1 = document.createElement("div");
    div1.className = "main-container"
    bodyContent.appendChild(div1);
    //console.dir(div1);
    
    
    var div2 = document.createElement("div");
    div2.className = "row"
    div1.appendChild(div2);
    //console.dir(div1);


    var heading1 = document.createElement("h1");
    heading1.textContent = "High Scores";
    div2.appendChild(heading1);

    //displaying high scores
    var div3 = document.createElement("div");
    var textBox = document.createElement("input");
    div3.className="score-div";
    div1.appendChild(div3); 
    textBox.setAttribute("type", "text");
    textBox.setAttribute("value", score);
    textBox.id = "score-text"
    textBox.disabled = true;
    div3.appendChild(textBox);

    //adding button go back
    var div4 = document.createElement("div");
    div4.className = "score-buttons";
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
    $("#clearHsBtn").css("box-shadow","none");
    clearScoreBtn.disabled = true;

    noHighScore();
    

}

//function that will display a message if there are no score to display

function noHighScore(){

    //create a p tag
    var displayMsg = document.createElement("p");
    displayMsg.id = "display-msg";
    displayMsg.textContent = "No scores to display!";
    $(".score-buttons").before(displayMsg);

}

//function ends

//start quiz event listener

$(".click-btn").on("click",function(){
    score = 0;
    startQuiz();
});
var questionNumber =0;
var answer = "";

//function to start the quiz and loop until all questions are answered
function startQuiz(){
        
    //console.log(answer);
    questionsPage(questionNumber);
    displayAnswer(answer);
    $("button").click(function(){
        var checkAns = $(this).text();
        //console.log(checkAns);
        checkAnswers(checkAns);
        //displayAnswer(answer);
        questionNumber++;
        console.log("question number = " + questionNumber);
        if (questionNumber<questions.length){
            startQuiz();
        } else {
            //displayAnswer(answer);
            endPage();
        }
       
    });

}

//function to create a page with questions and answers

function questionsPage(qNumber){

    var mainContent = document.querySelector(".main-container");
    mainContent.innerHTML = "";

    //mainContent.className = "qa-content";

    //container to display question and answer 
    var divQA1 = document.createElement("div");
    divQA1.className = "qa-content";
    mainContent.appendChild(divQA1);

        
    divQA1.innerHTML="";
    //debugger;
    //display the question
    var questionPEl = document.createElement("p");
    questionPEl.innerHTML = questions[qNumber].q; //0
    divQA1.appendChild(questionPEl);

    //div to display the answer in buttons
    var divQA2 = document.createElement("div");
    divQA2.className = "answer-btns click-btn";
    divQA1.appendChild(divQA2);

    //call the function which will add buttons to the page. 
    answerButtons();

    var divQA4 = document.createElement("div");
    divQA4.className = "answer-display";
    mainContent.appendChild(divQA4);

}

//function for displaying answer buttons

function answerButtons(){

    for (var i=0; i<questions[questionNumber].ans.length;i++){
            
        var btn = [];
        var divQA3 = [];
        var divQA2 = document.querySelector(".answer-btns")
        divQA3[i] = document.createElement("div");
        divQA3[i].className = "answerbtn-div";
        divQA2.appendChild(divQA3[i]);
        btn[i] = document.createElement("button");
        btn[i].textContent = questions[questionNumber].ans[i];
        btn[i].className = "btn answer-btn";
        divQA3[i].appendChild(btn[i]);

     }
}


//function to see if the answer is correct or wrong

function checkAnswers(answerCheck){
    var i=0;
    //var answer = "";   

    while (i<correctAnswer.length)
    {
        if (questionNumber === correctAnswer[i].q){
            if (answerCheck === correctAnswer[i].a){

                answer = "Correct!";
                console.log(answer);
                console.log(correctAnswer[i].a);
                score = score + 5;
                //return (answer);

            }  else {
                console.log(answer);
                answer = "Wrong!";
                score = score-2;
               // return(answer);
            }
        }
        i++;

    }
    

}

//function to tell user whether the answer entered is correct or wrong
function displayAnswer(finalAnswer){

    var divAnswer = document.querySelector(".answer-display");

    var answerPEl = document.createElement("p");
    answerPEl.textContent = finalAnswer;
    divAnswer.appendChild(answerPEl);
}


//end page function - displays the final score and lets the user enter initials
function endPage() {

    // if (userScore<0){
    //     userScore=0;
    // }

    var scoreText = "Your final score is " + score;

    var mainContent = document.querySelector(".main-container");
    var clearQuestion = document.querySelector(".qa-content");
    clearQuestion.innerHTML = "";    

    var endPageDiv = document.createElement("div");
    endPageDiv.className = "endpage-content";
    mainContent.appendChild(endPageDiv);

   $(endPageDiv).insertBefore(".answer-display");
    
    var headingEndP = document.createElement("h1");
    headingEndP.textContent = "All Done!"
    endPageDiv.appendChild(headingEndP);

    var scoreMsg = document.createElement("p");
    scoreMsg.textContent = scoreText;
    endPageDiv.appendChild(scoreMsg);

    var initialsDiv = document.createElement("div");
    initialsDiv.className = "initials-entry"
    endPageDiv.appendChild(initialsDiv);

    var initialLabel = document.createElement("label");
    initialLabel.setAttribute("for", "initials");
    initialLabel.textContent = "Enter Initials:"
    initialsDiv.appendChild(initialLabel);
    var initialsTextBox = document.createElement("input");
    initialsTextBox.setAttribute("name","initials");
    initialsTextBox.id = "initial-text";
    initialsDiv.appendChild(initialsTextBox);

    var initialSubmitBtn = document.createElement("button");
    initialSubmitBtn.className = "btn submit-initials";
    initialSubmitBtn.textContent = "Submit";
    initialsDiv.appendChild(initialSubmitBtn);

    //event listener for initials and score submit button
    
    initialSubmitBtn.addEventListener("click", function(event){
        event.preventDefault();
        if ($(".initial-text").text === ""){
            alert("Invalid entry. Please try again");
        } else {
            alert("Your score is saved!");
        }
        saveScore();
    });

}

function saveScore(){

    //save the initals in a variable
    var initialsValue = document.querySelector(".initial-text");
    var userInitials = initialsValue.textContent;
    //object to save the user initials and score
    var userObject = {initials:userInitials,playerScore:uScore};

    //save the user score object in the array.
    userScore.push(userObject);

    //save the object in local storage.
    localStorage.setItem("highscore", JSON.stringify(userObject));     


}

//function for score submission

function scoreSubmission(){
    
    container.innerHTML="";
    highScoreHtml();

    //get the score and initial and save it on local Storage

}

//function for sorting high score
function sortingScore(){

    var list = JSON.parse(localStorage.getItem('highscore')) || [];
    
    //if the no high score ie if the list is empty then go to function noHighScore and display the message
    //else sort the high score list from high to low
    if (list === []){
         noHighScore();
    } else {

        list.sort(function(x,y){
            return(x-y);
        });
        console.log(list);
        return(list);
    }

    
}