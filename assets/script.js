class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }


    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }


    isEnded(){
        return this.questionIndex === this.questions.length;
    }
}


class questions {
    constructor(text,choice, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

function displayQuestion(){
    if (quiz.isEnded()){
showScores();

    } else {
var questionElement =document.getElementById("question");
questionElement.innerHTML = quiz.getQuestionIndex().text;


var choices = quiz.getQuestionIndex().choices;
    }
}