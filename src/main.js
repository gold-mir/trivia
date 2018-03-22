import $ from 'jquery';
import { Trivia }from './trivia.js';
import {writeTrivia} from './triviaWriter.js'

let trivia = new Trivia();

$(document).ready(function(){
  trivia.getNextQuestion(function(question){
    writeTrivia(question);
    console.log(question);
    console.log(trivia.questions.length);
    console.log(trivia.sessionKey);
  });
});
