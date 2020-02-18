<template>
  <div>
    <h1 class="text-white">Vertical</h1>
    <section class="panel vertical-image">
      <h2 class="text-white">Panel 5 - A</h2>
      <b-container>
        <b-row class="first-row">
          <b-col md="4" offset-md="1" class="first-column">
            <div class="figure-container">
              <figure>
                <img
                  src="https://placeimg.com/540/800/nature"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </b-col>
        </b-row>
        <b-row class="second-row">
          <b-col md="7" offset-md="4" class="second-column">
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
    <section class="panel vertical-image">
      <h2 class="text-white">Panel 5 - B</h2>
      <b-container>
        <b-row class="first-row flex-row-reverse">
          <b-col md="4" offset-md="1" class="first-column">
            <div class="figure-container">
              <figure>
                <img
                  src="https://placeimg.com/540/800/nature"
                  alt=""
                  srcset=""
                />
              </figure>
            </div>
          </b-col>
        </b-row>
        <b-row class="second-row flex-row-reverse">
          <b-col md="7" offset-md="4" class="second-column">
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
export default {
  name: "home"
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
    .figure-container {
      background: #ccc;
      padding: 30px 30px 0;
    }
    img {
      height: 100%;
      width: 100%;
    }
    figure {
      margin: 0;
      max-width: 270px;
      width: 75%;
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

section {
  margin-bottom: 30px;
}

@media (min-width: 768px) {
  .vertical-image {
    .first-row {
      top: 120px;

      .first-column {
        .figure-container {
          background: none;
          padding: 0;
        }
        figure {
          max-height: 500px;
          max-width: 324px;
          overflow: hidden;
          width: auto;
        }
      }

      &.flex-row-reverse {
        .offset-md-1 {
          margin-right: 8.333333%;
        }
      }
    }

    .second-row {
      &.flex-row-reverse {
        .offset-md-4.second-column {
          margin-right: 33.333333%;

          .content-container {
            padding: 50px 100px 50px 50px;
          }
        }
      }
      .second-column .content-container {
        padding: 50px 50px 50px 100px;
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
