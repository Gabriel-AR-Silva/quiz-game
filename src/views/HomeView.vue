<template>
  <div class="home">
    <h1>Home</h1>
    <pre>
      {{ quiz ? quiz : error }}
    </pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      quiz: [],
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
  mounted() {
    this.APIParams.amount = 10;
    this.APIParams.category = 9;
    this.APIParams.difficulty = 'medium';
    this.APIParams.type = 'multiple';

    axios
      .get(`https://opentdb.com/api.php`, {
        params: {
          amount: this.APIParams.amount,
          category: this.APIParams.category,
          difficulty: this.APIParams.difficulty,
          type: this.APIParams.type
        }
      })
      .then(response => (this.quiz = response.data))
      .catch(error => (this.error = error)); 
  }
}
</script>
