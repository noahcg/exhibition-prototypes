<template>
  <section>
    <b-navbar class="chapters" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>Chapters</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#" v-for="item in menuItems" :key="item.id">{{ item }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
export default {
  name: "chapternavbar",
  data() {
    return {
      menuItems: {}
    };
  },
  created() {
    this.getNavItems().then(data => (this.menuItems = data.chapters.menuitem));
  },
  methods: {
    async getNavItems() {
      let response = await fetch(`/data/data.json`);
      let data = await response.json();
      return data;
    }
  }
};
</script>
<style lang="scss" scoped>
.chapters {
  background: #111 !important;
}
.navbar-brand {
  display: inline-block;
}
.navbar-nav {
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
  display: block;
  width: 100%;
  text-align: center;
  background-color: #111;
}
.nav-item {
  display: block;
}
.navbar-dark .navbar-nav .nav-link {
  display: block;
  padding: 1em;
  color: #fff;
  font-weight: bold;
  font-size: 1.15rem;
  text-decoration: none;
  text-transform: uppercase;
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: #bc9728;
  text-decoration: underline;
}
.navbar-dark .navbar-nav .nav-link:active,
.navbar-dark .navbar-nav .nav-link:focus {
  border: 0;
  color: #bc9728;
  outline: none;
  text-decoration: underline;
}
@media (min-width: 992px) {
  .chapters {
    padding: 0;
  }
  .navbar-brand {
    display: none;
  }
  .navbar-nav {
    display: table;
    table-layout: fixed;
  }
  .nav-item {
    display: table-cell;
  }
  .navbar-dark .navbar-nav .nav-link {
    font-size: 0.9rem;
  }
  .navbar-dark .navbar-nav .nav-link:hover {
    border-bottom: 3px solid #bc9728;
    color: #bc9728;
    text-decoration: none;
  }
  .navbar-dark .navbar-nav .nav-link:active,
  .navbar-dark .navbar-nav .nav-link:focus {
    border-bottom: 3px solid #bc9728;
    text-decoration: none;
  }
}
@media (min-width: 1200px) {
  .navbar-dark .navbar-nav .nav-link {
    font-size: 1.15rem;
  }
}
</style>