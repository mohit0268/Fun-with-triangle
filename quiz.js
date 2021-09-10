const quizForm=document.querySelector(".form-quiz")
const QuizBtn=document.querySelector("#submit-btn");
const QuizOutput=document.querySelector("#output");

const correctAnswer=["90°","Right angled"]

function calculateScore(){
    var index=0;
    var score=0;
    const formResults=new FormData(quizForm);
    for(let value of formResults.values()){
        if(value===correctAnswer[index]){
            score =score +1;
        }
        index= index+1;
    }
    QuizOutput.innerText="Your score is " + score;
}


QuizBtn.addEventListener("click",calculateScore);
