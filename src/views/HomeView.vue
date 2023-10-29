<template>
  <div class="home d-flex align-items-center" style="height: 100vh;">
    <div class="container d-flex flex-column align-items-center">
      <h1>QuizGame</h1>

      <router-link to="/quiz">
        <button class="btn btn-success text-white fs-4 px-5">
          START
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>
