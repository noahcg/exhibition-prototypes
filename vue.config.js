module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/assets/scss/styles.scss";`
      }
    }
  }
};
