<template>
  <fragment>
    <div class="book-img col-xl-3 col-lg-2 col-md-4 col-sm-4">
      <img class="iimg" :src="book.image" :alt="book.title">
    </div>
    <div class="about-itm col-xl-3 col-lg-4 col-md-8 col-sm-8">
      <h3 class="book-title">{{ book.title }}</h3>
      <h4 class="book-author">{{ book.author }}</h4>
      <p class="genre">Жанр: {{ book.genre_id }}</p>
      <p class="annotation">{{ book.annotation }}</p>
      <div class="next row no-gutters flex-grow-1 align-items-end">
        <div class="col-xl-12 col-md-6 col-sm-9 col-lg-9 col-9">
          <router-link :to="{ name: 'about-book-page', params: { id: this.book.id } }" class="btn btn-outline-primary btn-block" role="button">Детальніше</router-link>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
  export default {
    name: 'Book',
    props: ['book']
  }
</script>

<style scoped>
  .row-books > div:nth-child(n) {
    padding: 10px;
  }

  .book-img .iimg {
    width: 100%;
  }

  .about-itm {
    display: flex;
    flex-direction: column;
  }

  .about-itm .book-title {
    color: #007bff;
  }

  .about-itm .book-title a:hover {
    text-decoration: none;
  }

  .about-itm .book-author {
    color: #007bff;
    margin-bottom: 20px;
  }

  .about-itm .book-author a:hover {
    text-decoration: none;
  }

  .about-itm .genre {
    margin-bottom: 20px;
  }

  .about-itm .genre a {
    color: black;
    text-decoration: underline;
  }

  .about-itm .genre a:hover {
    color: #007bff;
  }

  .annotation {
    overflow: hidden;
    max-height: calc(1.5em * 6)
  }
  @media (max-width: 576px) {
    .book-title, .book-author {
      text-align: center;
    }

    .next {
      justify-content: center;
    }
  }
</style>
