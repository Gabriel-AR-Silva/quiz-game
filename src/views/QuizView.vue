<template>
  <div class="quiz">
    <h1>Home</h1>

    <router-link to="/">Inicio</router-link>

    <QuizCard :infoQuiz="quiz" :answers="answers" @nextQuiz="loadQuiz"/>
  </div>
</template>

<script>
import axios from "axios";
import QuizCard from "@/components/QuizCard";

export default {
  name: 'QuizView',
  components: { QuizCard },
  data() {
    return {
      quiz: [],
      answers: [],
      error: null,  
      category: null,
      APIParams: {
        'amount': null,
        'category': null,
        'difficulty': null,
        'type': null
      }
    }
  },
  methods: {
    loadQuiz() {
      this.getQuiz();
    },
    shuffleAnswers(quizParam) {
      Array.prototype.insert = function(index, resposta) {
          this.splice(index, 0, resposta);
      }

      this.answers = [];

      this.answers.insert(Math.floor(Math.random() * 3), quizParam.correct_answer);
      this.answers.insert(Math.floor(Math.random() * 3), quizParam.incorrect_answers[0]);
      this.answers.insert(Math.floor(Math.random() * 3), quizParam.incorrect_answers[1]);
      this.answers.insert(Math.floor(Math.random() * 3), quizParam.incorrect_answers[2]);

      this.quiz = quizParam;
    },
    getQuiz (){
      axios
        .get(`https://opentdb.com/api.php`, {
          params: {
            amount: this.APIParams.amount,
            category: this.APIParams.category,
            difficulty: this.APIParams.difficulty,
            type: this.APIParams.type
          }
        })
        .then(response => (this.shuffleAnswers(response.data.results[0])))
        .catch(error => (this.error = error)); 
    }, 
  },
  mounted() {
    this.APIParams.amount = 1;
    this.APIParams.category = 9;
    this.APIParams.difficulty = 'medium';
    this.APIParams.type = 'multiple';

    this.getQuiz();
  },
}
</script>
