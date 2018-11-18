<template>
  <div class="genre col-xl-3 col-lg-3 col-md-4 col-sm-6">
    <router-link :to="{ name: 'about-genre-page', params: { slug: this.genre.slug } }">{{ genre.genre }}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Genre',
    props: ['genre']
  }
</script>

<style scoped>
  .genre {
    margin-bottom: 20px;
  }
  @media (max-width: 576px) {
    .genre {
      text-align: center;
    }
  }
</style>
