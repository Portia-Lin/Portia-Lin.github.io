<template>
    <div class="container">
      <div class="row-books row no-gutters">
        <Book :book="book" v-for="(book, index) of books" :key="index"/>
      </div>
    </div>
</template>

<script>
  import { db } from '../firebase/db'
  import Book from '../components/Book.vue'

  export default {
    name: 'Books',
    data () {
      return {
        books: []
      }
    },
    firebase: {
      books: db.ref('books')
    },
    components: { Book }
  }
</script>

<style scoped>

</style>
