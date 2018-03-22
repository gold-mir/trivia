import {writeError} from './errorWriter.js';
import $ from 'jquery';

export function Trivia(){

}

Trivia.prototype.sessionKey = null;

Trivia.prototype.reset = function(){
  this.sessionKey = null;
}

Trivia.prototype.questions = [];

Trivia.prototype.getNextQuestion = function(callback){
  let getQuestions = (callback) => {
    $.ajax({
      url: `https://opentdb.com/api.php?amount=50&token=${this.sessionKey}`,
      method: 'GET',
      success: (result) => {
        this.questions = result.results;
        callback(this.questions.pop());
      },
      error: function(error){
        writeError(error);
      }
    });
  }

  if(this.questions.length > 0){
    let question = this.questions.pop();
    callback(question);
  } else {
    console.log("doing ajax");
    if(this.sessionKey == null){
      console.log("session key null, getting new one")
      $.ajax({
        url: `https://opentdb.com/api_token.php?command=request`,
        method: `GET`,
        success: (result) => {
          this.sessionKey = result.token;
          getQuestions(callback);
        },
        error: function(error){
          writeError(error);
        }
      });
    } else {
      getQuestions(callback);
    }
  }
}
