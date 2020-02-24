<template>
  <div>
    <section class="panel grid-panel">
      <h2 class="text-white">Panel 4</h2>
      <b-container>
        <b-row class="no-gutters">
          <b-col sm="12" md="6" lg="4">
            <figure>
              <img src="https://placeimg.com/400/350/tech" alt="" srcset="" />
              <figcaption>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur maiores, alias quam quas nobis amet animi beatae
                minus. uuntur maiores, alias quam quas nobis amet animi beatae
                minus.
              </figcaption>
            </figure>
          </b-col>
          <b-col sm="12" md="6" lg="4">
            <figure>
              <img
                src="https://placeimg.com/400/350/animals"
                alt=""
                srcset=""
              />
              <figcaption>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur maiores, alias quam quas nobis amet animi beatae
                minus.
              </figcaption>
            </figure>
          </b-col>
          <b-col sm="12" md="6" lg="4">
            <figure>
              <img src="https://placeimg.com/400/350/arch" alt="" srcset="" />
              <figcaption>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur maiores, alias quam quas nobis amet animi beatae
                minus.
              </figcaption>
            </figure>
          </b-col>
          <b-col sm="12" md="6" lg="4">
            <figure>
              <img src="https://placeimg.com/400/350/nature" alt="" srcset="" />
              <figcaption>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur maiores, alias quam quas nobis amet animi beatae
                minus.
              </figcaption>
            </figure>
          </b-col>
          <b-col sm="12" md="6" lg="4">
            <figure>
              <img src="https://placeimg.com/400/350/people" alt="" srcset="" />
              <figcaption>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur maiores, alias quam quas nobis amet animi beatae
                minus.
              </figcaption>
            </figure>
          </b-col>
          <b-col sm="12" md="6" lg="4">
            <figure>
              <img
                src="https://placeimg.com/400/350/grayscale"
                alt=""
                srcset=""
              />
              <figcaption>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur maiores, alias quam quas nobis amet animi beatae
                minus.
              </figcaption>
            </figure>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
}
// .no-gutters {
//   overflow: hidden;
// }
figure {
  height: 100%;
  margin: 0;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
}
figcaption {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 15px;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1095px;
  }
}
</style>
