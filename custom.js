
// "use strict"
const startBtn=document.querySelector(".start-btn");
const exitBtn=document.querySelector(".exit-btn");
const popupInfo=document.querySelector(".popup-info");
const main=document.querySelector(".main");
const continueBtn=document.querySelector(".continue-btn");
const quizSection=document.querySelector(".quiz-section");
const quizBox=document.querySelector(".quiz-box");



startBtn.onclick=()=>{
    popupInfo.classList.add("active");
    main.classList.add("active");
}
// startBtn.onclick=()=>{
//     popupInfo.classList.add("active");
// }
exitBtn.onclick=()=>{
    popupInfo.classList.remove("active");
    main.classList.remove("active");
}
continueBtn.onclick=()=>{
    quizSection.classList.add("active");
    quizBox.classList.add("active");
    popupInfo.classList.remove("active");
    main.classList.remove("active");
    
    showQuestions(0); 
    questionCounter(1);
    headerScore();
}

let questionCount=0;
let questionNum=1;
let userScore=0;
const nextBtn=document.querySelector(".next-btn")

nextBtn.onclick=()=>{
    if(questionCount<questions.length+1){
    questionCount++;
    showQuestions(questionCount);
    questionNum++;
    questionCounter(questionNum);
    nextBtn.classList.remove('active');
    }
    else{
        alert("Question Complete")
    }
}
const optionList=document.querySelector(".option-list")
// showQuestions();
// getting question and option from array

function showQuestions(index) {
    const questionText=document.querySelector(".questions-test");
    questionText.textContent=`${questions[index].num}. ${questions[index].questions}`;

    let optionTag=`<div class="option"><span>${questions[index].option[0]}</span></div>
    <div class="option"><span>${questions[index].option[1]}</span></div>
    <div class="option"><span>${questions[index].option[2]}</span></div>
    <div class="option"><span>${questions[index].option[3]}</span></div>`

      optionList.innerHTML=optionTag;
      const option=document.querySelectorAll(".option");
      for(let  i=0; i<option.length;i++){
        option[i].setAttribute("onclick","optionSelected(this)")
      }
    }
      function optionSelected(answer){
        let useAnswer=answer.textContent;
        let correctAnswer=questions[questionCount].answer;
        let alloption=optionList.children.length;
       
          if(useAnswer==correctAnswer){
            console.log('Answer is Correct');
            answer.classList.add('correct');
            userScore +=1;
            headerScore();
             nextBtn.classList.add('active')
        }
        else{
          
          // if user select desable all option
            answer.classList.add('incorrect');
            for(let i=0; i<alloption;i++){
  optionList.children[i].classList.add("disabled")
   nextBtn.classList.add('active')
        
}
// if incorrect answer auto select correct answer
          for(let i=0; i<alloption;i++){
            if(optionList.children[i].textContent==correctAnswer
             
            ){ optionList.children[i].setAttribute('class',"option correct")
              
            }
  
}


        }
        }
       
      


      


function questionCounter(index){
    const questionTotal=document.querySelector(".question-total");
    questionTotal.textContent= `${index} of ${questions.length} questions `;

}
// for user score
function headerScore(){
  const headerScore=document.querySelector('.header-score')
  headerScore.textContent=`Score: ${userScore} / ${questions.length}`
}


