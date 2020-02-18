<template>
  <div>
    <h1 class="text-white">Horizontal</h1>
    <section class="panel horizontal-image">
      <h2 class="text-white">Panel 1 - A</h2>
      <b-container>
        <b-row class="first-row">
          <b-col md="5" offset-md="1" class="first-column">
            <agile>
              <div class="slide">
                <figure>
                  <img
                    src="https://placeimg.com/800/540/animals"
                    alt=""
                    srcset=""
                  />
                </figure>
              </div>
              <div class="slide">
                <figure>
                  <img
                    src="https://placeimg.com/800/540/arch"
                    alt=""
                    srcset=""
                  />
                </figure>
              </div>
              <div class="slide">
                <figure>
                  <img
                    src="https://placeimg.com/800/540/nature"
                    alt=""
                    srcset=""
                  />
                </figure>
              </div>
            </agile>
          </b-col>
        </b-row>
        <b-row class="second-row">
          <b-col md="6" offset-md="5" class="second-column">
            <div class="content-container">
              <h2 class="text-left">Sample Title</h2>
              <p class="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                consequuntur! Non, cupiditate reprehenderit laboriosam sunt
                impedit hic autem ipsam architecto voluptates voluptate! Alias
                incidunt blanditiis beatae quia officia. Ex, explicabo!
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="panel horizontal-image">
      <h2 class="text-white">Panel 1 - B</h2>
      <b-container>
        <b-row class="first-row flex-row-reverse">
          <b-col md="5" offset-md="1" class="first-column">
            <figure>
              <img src="https://placeimg.com/800/540/nature" alt="" srcset="" />
            </figure>
          </b-col>
        </b-row>
        <b-row class="second-row flex-row-reverse">
          <b-col md="6" offset-md="5" class="second-column">
            <div class="content-container">
              <h2 class="text-left">Sample Title</h2>
              <p class="text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                consequuntur! Non, cupiditate reprehenderit laboriosam sunt
                impedit hic autem ipsam architecto voluptates voluptate! Alias
                incidunt blanditiis beatae quia officia. Ex, explicabo!
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { VueAgile } from "vue-agile";
export default {
  name: "home",
  components: {
    agile: VueAgile
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
}
.first-row {
  position: relative;
  z-index: 2;
  .first-column {
    img {
      height: 100%;
      width: 100%;
    }
    figure {
      margin: 0;
    }
  }
}
.second-row {
  position: relative;
  z-index: 1;
  .second-column .content-container {
    background: #ccc;
    padding: 30px;
  }
}

section {
  margin-bottom: 30px;
}

.agile ::v-deep {
  .agile__dots {
    left: 50%;
    position: absolute;
    top: 10px;
    transform: translateX(-50%);

    button {
      background: #fff;
      border-radius: 50%;
      height: 15px;
      padding: 0;
      width: 15px;
    }

    li {
      margin: 0 3px;
    }

    .agile__dot--current button {
      background: orangered;
    }
  }

  .agile__nav-button {
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .agile__nav-button.agile__nav-button--next {
    left: inherit;
    right: 0;
  }
}

@media (min-width: 768px) {
  .first-row {
    top: 80px;

    .first-column figure {
      max-height: 324px;
      max-width: 540px;
      overflow: hidden;
    }
  }

  .second-row {
    .second-column .content-container {
      padding: 50px 50px 50px 100px;
    }
  }
  .flex-row-reverse {
    .offset-md-1 {
      margin-right: 8.333333%;
    }
    .offset-md-5 {
      margin-right: 41.666667%;

      .content-container {
        padding: 50px 100px 50px 50px;
      }
    }
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1095px;
  }
}
</style>
<style lang="scss">
</style>
