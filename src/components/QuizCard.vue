<template>
    <div class="quiz-card">
      <div class="container">
        <h3 class="text-center">--- Question ---</h3>
        <h4 class="text-center">{{ infoQuiz.category }}</h4>
        <!-- <h5 class="text-center">{{ infoQuiz.difficulty }}</h5> -->
        <p class="text-center">{{ infoQuiz.question }}</p>
        <p class="text-center text-primary">Correct Answers: {{ correctAnswers ? correctAnswers : 0}}</p>

        <div class="d-flex flex-column gap-2" style="width: 400px; margin: 0 auto;">
          <button v-for="( answer, index ) in answers" :key="index" @click.prevent="markAnswer(index)" :class="activeBTN == index ? 'btn-success' : 'btn-secondary'" class="btn btn-secondary">{{ answer }}</button>

          <button class="btn btn-primary mt-4" @click.prevent="submitAnswer()">Responder</button>
          <span v-if="answerError" class="text-danger">{{ answerError }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';

  export default defineComponent ({
    name: 'QuizCard',
    components: {},
    props: {
        infoQuiz: Object,
        answers: Array,
    },
    data() {
      return {
        activeBTN: null,
        answerError: null,
        correctAnswers: null,
      }
    },
    methods: {
      sendToFather() {
      this.$emit('nextQuiz');
    },
      markAnswer(index) {
        this.activeBTN = this.activeBTN || this.activeBTN === 0 ? (this.activeBTN === index ? null : index) : index;
      },
      submitAnswer() {
        this.answerError = this.activeBTN || this.activeBTN === 0 ? null : 'Hello: Please choose any answer !!';

        if (this.activeBTN || this.activeBTN === 0) { 
          this.correctAnswers += this.answers[this.activeBTN] == this.infoQuiz.correct_answer ? 1 : 0;

          this.sendToFather();

          this.activeBTN = null;
        }

        return;
      }
    },
    mounted() {
    },
  })
  </script>
  