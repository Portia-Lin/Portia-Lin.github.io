<template>
  <div class="container" v-if="genre">
    <div class="about-genre row no-gutters">
        <h3 class="book-genre">{{ genre.genre }}</h3>
    </div>
    <div class="about-genre row">
        <Book :book="book" v-for="book of books" :key="book['key']"/>
    </div>
  </div>
</template>

<script>
  import { db } from '../firebase/db'
  import Book from '../components/Book'

  export default {
    name: 'AboutGenrePage',
    components: { Book },
    data () {
      return {
        genre: null,
        books: null
      }
    },
    mounted () {
      db.ref('genres').orderByChild('slug').equalTo(this.$route.params.slug).on('value', (snapshot) => {
        snapshot.forEach(data => {
          this.genre = data.val()
          db.ref('books').orderByChild('genre_id').equalTo(this.genre['id']).on('value', (child) => {
            this.books = child.val()
          })
        })
      })
    }
  }
</script>

<style scoped>
  .about-genre {
    margin-top: 30px;
  }
  .about-genre .genre-description .book-genre {
    text-align: center;
    color: #007bff;
    text-transform: uppercase;
  }
</style>
