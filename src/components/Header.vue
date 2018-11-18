<template>
  <div class="container">
    <header>
      <b-navbar toggleable="md" variant="light">
        <b-navbar-brand href="/" class="logo">
          <p>
            <span class="b">B</span><span class="book">ook </span><span class="m">M</span><span class="market">arket</span>
          </p>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse" class="justify-content-end">
          <b-navbar-nav>
            <b-nav-item href="/">ГОЛОВНА</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="/books">КНИГИ</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="/genres">ЖАНРИ</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item href="/authors">АВТОРИ</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
  header {
    margin-bottom: 20px;
  }
  .logo {
    font-size: 40px;
    color: black;
    text-decoration: none;
  }
  .logo .b {
    color: #0464F1;
  }
  .logo .m {
    color: #ADD9D3;
  }
  .logo:hover {
    text-decoration: none;
    color: black;
  }
  .logo > p {
    margin: 0;
    padding: 0;
  }
</style>
