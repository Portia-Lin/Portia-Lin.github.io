<template>
  <div class="author row">
    <div class="author-img col-xl-3 col-lg-4 col-md-5 col-sm-12">
      <img class="iimg" :src="author.image" :alt="author.name">
    </div>
    <div class="about-author col-xl-9 col-lg-8 col-md-7 col-sm-12">
      <h3 class="author-name">{{ author.name }}</h3>
      <p class="biography">{{ author.biography }}</p>
      <div class="next row no-gutters flex-grow-1 align-items-end">
        <div class="col-xl-4 col-lg-6 col-md-8 col-sm-9 col-9">
          <router-link :to="{ name: 'about-author-page', params: { id: this.author.id } }" class="btn btn-outline-primary btn-block" role="button">Детальніше</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Author',
    props: ['author']
  }
</script>

<style scoped>
  .author {
    margin-bottom: 20px;
  }
  .author-img .iimg {
    width: 100%;
    margin-bottom: 20px;
  }
  .author .about-author p {
    margin-bottom: 10px;
  }
  .author .about-author .biography {
    overflow: hidden;
    max-height: calc(1.5em * 8)
  }
  @media (max-width: 576px) {
    .next {
      justify-content: center;
    }
  }
</style>
