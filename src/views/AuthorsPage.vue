<template>
  <div class="container">
      <Author :author="author" v-for="(author, index) of authors" :key="index"/>
  </div>
</template>

<script>
  import { db } from '../firebase/db'
  import Author from '../components/Author.vue'

  export default {
    name: 'Authors',
    data () {
      return {
        authors: []
      }
    },
    firebase: {
      authors: db.ref('authors')
    },
    components: { Author }
  }
</script>

<style scoped>
  .row-authors {
    margin-top: 30px;
  }
</style>
