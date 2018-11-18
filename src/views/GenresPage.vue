<template>
  <div class="container">
    <div class="row-genres row">
      <Genre :genre="genre" v-for="(genre, index) of genres" :key="index"/>
    </div>
  </div>
</template>

<script>
  import { db } from '../firebase/db'
  import Genre from '../components/Genre.vue'

  export default {
    name: 'Genres',
    data () {
      return {
        genres: []
      }
    },
    firebase: {
      genres: db.ref('genres')
    },
    components: { Genre }
  }
</script>

<style scoped>
  .row-genres {
    margin: 50px 10px;
  }
</style>
