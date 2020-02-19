<template>
  <div>
    <h1 class="text-white">Panel 3</h1>
    <section class="panel3">
      <b-container>
        <agile>
          <div class="slide">
            <b-row class="first-row">
              <b-col>
                <figure>
                  <img
                    src="https://placeimg.com/600/340/animals"
                    alt=""
                    srcset=""
                  />
                </figure>
              </b-col>
            </b-row>
            <b-row class="second-row">
              <b-col sm="10" offset-sm="1">
                <div class="content-container">
                  <h2>Title 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus aspernatur fugiat delectus, est dolorem magni
                    doloribus libero, corrupti facere eligendi vero, ipsum
                    dolorum excepturi harum maxime illo! Ab, necessitatibus
                    tenetur.
                  </p>
                  <hr />
                  <p>Caption caption caption</p>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="slide">
            <b-row class="first-row">
              <b-col>
                <figure>
                  <img
                    src="https://placeimg.com/600/340/arch"
                    alt=""
                    srcset=""
                  />
                </figure>
              </b-col>
            </b-row>
            <b-row class="second-row">
              <b-col sm="10" offset-sm="1">
                <div class="content-container">
                  <h2>Title 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus aspernatur fugiat delectus, est dolorem magni
                    doloribus libero, corrupti facere eligendi vero, ipsum
                    dolorum excepturi harum maxime illo! Ab, necessitatibus
                    tenetur.
                  </p>
                  <hr />
                  <p>Caption caption caption</p>
                </div>
              </b-col>
            </b-row>
          </div>
        </agile>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { VueAgile } from "vue-agile";
export default {
  name: "panel3",
  components: {
    agile: VueAgile
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
}
.panel3 {
  .first-row {
    position: relative;

    figure {
      margin: 0;
    }
    img {
      width: 100%;
    }
  }
  .second-row .content-container {
    background: #ccc;
    padding: 30px;

    h2,
    p {
      text-align: left;
    }
  }
}
.agile ::v-deep {
  .agile__dots {
    left: 50%;
    position: absolute;
    top: 60px;
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
    top: 40%;
    transform: translateY(-40%);
  }

  .agile__nav-button.agile__nav-button--next {
    left: inherit;
    right: 0;
  }
}
@media (min-width: 576px) {
  .panel3 {
    .first-row {
      top: 50px;
    }
  }
}
</style>
