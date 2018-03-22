import $ from 'jquery';
import {Trivia} from './trivia.js';

export function writeTrivia(trivia){
  function 
  $("#trivia-question").text(trivia.question);
  let answers = [];
  answers.push({answer: trivia.correct_answer, correct: true});
  trivia.incorrect_answers.forEach(function(item){
    answers.push({answer: item, correct: false});
  });

  shuffle(answers);

}

function shuffle(answers){
  let counter = answers.length;
  while(counter > 0){
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = answers[counter];
    answers[counter] = answers[index];
    answers[index] = temp;
  }
}
