var question = [
    {
      question: "HTML Stands for ______________",
      options: ["HTML", "HTML", "Hypertext Markup Language", "HTML"],
      correctAnswer: "Hypertext Markup Language",
    },
    {
      question: "CSS Stands for ______________",
      options: ["CSS", "CSS", "Cascading Style Sheet", "CSS"],
      correctAnswer: "Cascading Style Sheet",
    },
    {
      question: "JS Stands for ______________",
      options: ["JS", "JS", "JavaScript", "JS"],
      correctAnswer: "JavaScript",
    },
    {
      question: "RAM Stands for ______________",
      options: ["RAM", "RAM", "Random Access Memory", "RAM"],
      correctAnswer: "Random Access Memory",
    },
    {
      question: "SQL Stands for ______________",
      options: ["SQL", "SQL", "Structured Query Language", "SQL"],
      correctAnswer: "Structured Query Language",
    },
    {
      question: "is HTML is Programming Language?",
      options: ["YES", "NO"],
      correctAnswer: "NO",
    },
  ];
 
   var indexvl = 0;
   var Mark = 0;

  var QuerentQueetion = document.getElementById('QuerentQueetion');
  var totalQueation = document.getElementById('totalQueation');
  var displayQueastion = document.getElementById('displayQueastion')
  var optionQuestion = document.getElementById('optionQuestion')
  
   
  function renderQuestion(){
var que = question[indexvl];
displayQueastion.innerHTML = que.question;
totalQueation.innerHTML = question.length;
QuerentQueetion.innerHTML = indexvl + 1;

optionQuestion.innerHTML = '';
for(var i =0; i < que.options.length;i++){
    optionQuestion.innerHTML += `<div class="col-md-6 mb-3">
    <button class="p-3 text-center bg-success text-white  fs-2 w-100" onclick ="checkAns('${que.correctAnswer}', '${que.options[i]}')" class="bg-info-subtle w-100 p-3  a">${que.options[i]}</button>
</div>
` ;
}
}
var buttondiv = document.getElementById('buttondiv');
function renderQuestionqqq() {
  if(totalQueation.innerHTML === QuerentQueetion.innerHTML){
    var button =document.createElement('button');
var btnVal = document.createTextNode('Submit');
button.appendChild(btnVal);
buttondiv.appendChild(button);
button.setAttribute('class', 'btn  btn-outline-success px-3 py-3')
button.setAttribute('onclick', 'result()')
  }else{
    indexvl++;
     renderQuestion(); 
  }
}
 
var main = document.getElementById('main');
 var mainunder = document.getElementById('mainunder');

function result(){
  
  main.innerHTML = '';
  var h3 = document.createElement('h3');
  var h3val = document.createTextNode('Your Quiz Is Your Result '+ Mark + ' Mark')
h3.appendChild(h3val);
mainunder.appendChild(h3);
h3.setAttribute('class', 'bg-success   rounded text-white py-3  ')



}

function checkAns(a,b){
  if(a == b){
    Mark++;
  }
  // console.log(Mark);
 renderQuestionqqq();
}
  renderQuestion();