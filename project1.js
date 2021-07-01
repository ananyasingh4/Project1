var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question('May I have your name? ');
console.log('Welcome ' + userName +" to DO YOU KNOW Ananya" +'!');
function play(question,answer){
  var userAnswer= readlineSync.question(question);
if(userAnswer === answer){
  console.log("you are right");
  score=score+1;
}else{
  console.log("you are wrong");
  score=score;
}
console.log("you scored:",score)
  console.log("-----------");
}
var questions = [{
 question:"where do I live?",
 answer:"nagpur"
},
{
 question:"which is my favorite color?",
 answer:"black"
},
{
 question:"which is my favorite destination ?",
 answer:"paris"
},
{
 question:"what do i like the most?",
 answer:"travelling"
},
{
 question:"which is my favorite junk food?",
 answer:"pizza"
}];
for (i= 0;i< questions.length; i++){
var currentQuestion = questions[i];
play(currentQuestion.question ,currentQuestion.answer)
}