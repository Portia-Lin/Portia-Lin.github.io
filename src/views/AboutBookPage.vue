<template>
  <div class="container" v-if="book">
    <div class="about-book row">
      <div class="book-img col-xl-4 col-lg-4 col-md-4 col-sm-7">
        <img class="iimg" :src="book.image" :alt="book.title">
      </div>
      <div class="book-description col-xl-8 col-lg-8 col-md-8 col-sm-12">
        <h3 class="book-title">{{ book.title }}</h3>
        <h4 class="book-author">{{ book.author }}</h4>
        <p class="original-book-title"><span class="original-book-title-label">Оригінальна назва: </span>{{ book.originalTitle }}</p>
        <p class="original-book-language"><span class="original-book-language-label">Мова оригіналу: </span>{{ book.language }}</p>
        <p class="genre"><span class="genre-label">Жанр: </span>{{ book.genre_id }}</p>
        <p class="book-series"><span class="book-series-label">Серія: </span>{{ book.series }}</p>
        <p class="book-series-number"><span class="book-series-number-label">Номер книги в серії: </span>{{ book.seriesNumber }}</p>
        <p class="book-year"><span class="book-year-label">Рік: </span>{{ book.year }}</p>
        <p class="isbn"><span class="isbn-label">ISBN: </span>{{ book.isbn }}</p>
        <p class="book-language"><span class="book-language-label">Переклад: </span>{{ book.translate }}</p>
        <p class="book-annotation-label">Короткий опис:</p>
        <p class="book-annotation-text" id="book-annotation-last-text">{{ book.annotation}}</p>
        <div class="taptodwn row no-gutters">
          <div class="col-xl-5 col-lg-6 col-md-8 col-sm-7 col-9">
            <a class=" btn btn-outline-primary btn-block" :href="book.file" download role="button">Завантажити</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from '../firebase/db'

  export default {
    name: 'AboutBookPage',
    data () {
      return {
        book: null,
        id: null
      }
    },
    created () {
      this.id = parseInt(this.$route.params.id)
    },
    mounted () {
      db.ref('books').orderByChild('id').equalTo(this.id).on('value', (snapshot) => {
        snapshot.forEach((data) => {
          this.book = data.val()
        })
      })
    }
  }
</script>

<style scoped>
  .about-book {
    margin-bottom: 30px;
  }

  .about-book .book-img {
    margin-bottom: 25px;
  }

  .about-book .book-img .iimg {
    width: 100%;
  }

  .about-book .book-description .book-title {
    color: #007bff;
  }

  .about-book .book-description .book-author {
    color: #007bff;
    margin-bottom: 25px;
  }

  .about-book .book-description .book-author a:hover{
    text-decoration: none;
  }

  .about-book .book-description .original-book-title {
    margin-bottom: 0;
  }

  .about-book .book-description .original-book-title-label {
    color: gray;
  }

  .about-book .book-description .original-book-language {
    margin-bottom: 0;
  }

  .about-book .book-description .original-book-language-label {
    color: gray;
  }

  .about-book .book-description .genre {
    margin-bottom: 0;
  }

  .about-book .book-description .genre a {
    color: black;
    text-decoration: underline;
  }

  .about-book .book-description .genre a:hover {
    color: #007bff;
  }

  .about-book .book-description .genre-label {
    color: gray;
  }

  .about-book .book-description .book-series {
    margin-bottom: 0;
  }

  .about-book .book-description .book-series a {
    color: black;
    text-decoration: underline;
  }

  .about-book .book-description .book-series a:hover {
    color: #007bff;
  }

  .about-book .book-description .book-series-label {
    color: gray;
  }

  .about-book .book-description .book-series-number {
    margin-bottom: 0;
  }

  .about-book .book-description .book-series-number-label {
    color: gray;
  }

  .about-book .book-description .book-year {
    margin-bottom: 0;
  }

  .about-book .book-description .book-year-label {
    color: gray;
  }

  .about-book .book-description .isbn {
    margin-bottom: 0;
  }

  .about-book .book-description .isbn-label {
    color: gray;
  }

  .about-book .book-description .book-language {
    margin-bottom: 25px;
  }

  .about-book .book-description .book-language-label {
    color: gray;
  }

  .about-book .book-description .book-annotation-label {
    color: gray;
    margin-bottom: 10px;
  }

  .about-book .book-description .book-annotation-text {
    margin-bottom: 10px;
  }

  #book-annotation-last-text {
    margin-bottom: 25px;
  }
</style>
