<template>
  <div class="container" v-if="author">
    <div class="about-author row">
      <div class="author-img col-xl-4 col-lg-4 col-md-4 col-sm-7">
        <img class="iimg" :src="author.image" :alt="author.name">
      </div>
      <div class="author-description col-xl-8 col-lg-8 col-md-8 col-sm-12">
        <h3 class="author-title">{{ author.name }}</h3>
        <p class="author-birth"><span class="author-birth-label">Дата народження: </span>{{ author.birth }}</p>
        <p class="author-location"><span class="author-location-label">Місце народження: </span>{{ author.locatian }}</p>
        <p class="author-activity"><span class="author-activity-label">Діяльність: </span>{{ author.activity }}</p>
        <p class="author-genre"><span class="author-genre-label">Жанр: </span>(нужно дописать в джава скрипт какую-то херь)</p>
        <p class="author-language"><span class="author-language-label">Мова творі: </span>{{ author.language }}</p>
        <h5 class="author-biography-label">Біографія:</h5>
        <p class="author-biography-text">{{ author.biography }}</p>
        <h5 class="author-bibliography-label">Бібліографія:</h5>
        <p>(наверное ее не будет, сложнааа...)</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from '../firebase/db'

  export default {
    name: 'AboutAuthorPage',
    data () {
      return {
        author: null,
        id: null
      }
    },
    created () {
      this.id = parseInt(this.$route.params.id)
    },
    mounted () {
      db.ref('authors').orderByChild('id').equalTo(this.id).on('value', (snapshot) => {
        snapshot.forEach((data) => {
          this.author = data.val()
        })
      })
    }
  }
</script>

<style scoped>
  .about-author {
    margin-bottom: 30px;
  }

  .about-author .author-img {
    margin-bottom: 25px;
  }

  .about-author .author-img .iimg {
    width: 100%;
  }

  .about-author .author-description .author-title {
    color: #007bff;
    margin-bottom: 25px;
  }

  .about-author .author-description .author-birth {
    margin-bottom: 0;
  }

  .about-author .author-description .author-birth-label {
    color: gray;
  }

  .about-author .author-description .author-location {
    margin-bottom: 0;
  }

  .about-author .author-description .author-location-label {
    color: gray;
  }

  .about-author .author-description .author-activity {
    margin-bottom: 0;
  }

  .about-author .author-description .author-activity-label {
    color: gray;
  }

  .about-author .author-description .author-genre {
    margin-bottom: 0;
  }

  .about-author .author-description .author-genre  a{
    color: black;
    text-decoration: underline;
  }

  .about-author .author-description .author-genre  a:hover{
    color: #007bff;
  }

  .about-author .author-description .author-genre-label {
    color: gray;
  }

  .about-author .author-description .author-language {
    margin-bottom: 25px;
  }

  .about-author .author-description .author-language-label {
    color: gray;
  }

  .about-author .author-description .author-biography-label {
    color: #007bff;
    margin-bottom: 10px;
  }

  .about-author .author-description .author-biography-text {
    margin-bottom: 25px;
  }

  .about-author .author-description .author-bibliography-label {
    color: #007bff;
    margin-bottom: 10px;
  }

</style>
