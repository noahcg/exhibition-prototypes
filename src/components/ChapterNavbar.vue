<template>
  <section>
    <b-navbar class="chapters" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>Chapters</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item :href="item.url" v-for="item in menuItems" :key="item.id">{{ item.text }}</b-nav-item>
      </b-navbar-nav>
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
  mounted() {
    this.getNavItems().then(data => {
      if (window.innerWidth > 992) {
        this.menuItems = data.chapters.menuitem.desktop;
      } else {
        this.menuItems = data.chapters.menuitem.mobile;
      }
    });
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
  justify-content: inherit;
  padding: 0 5px;
}
.navbar-brand {
  display: inline-block;
  margin-right: 5px;
}
.navbar-nav {
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
  flex-direction: row;
  text-align: center;
  background-color: #111;
  justify-content: space-evenly;
  flex-grow: 1;
  flex-basis: 0;
}
.navbar-dark .navbar-nav .nav-link {
  padding: 10px 0;
  color: #fff;
  font-weight: bold;
  font-size: 1.15rem;
  text-decoration: none;
  text-transform: uppercase;
  min-width: 48px;
  min-height: 48px;
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