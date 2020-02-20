<template>
  <div>
    <h1 class="text-white">Panel 2 - Image</h1>
    <!-- <section class="panel2-image">
      <b-container
        class="parent"
        style="background-image: url('https://placeimg.com/800/540/animals');"
      >
        <div class="image-mask"></div>
        <b-row class="h-100 align-items-center">
          <b-col
            lg="10"
            offset-lg="1"
            xl="8"
            offset-xl="2"
            class="text-left text-white content"
          >
            <h1 class="text-center">Title</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium illum qui et. Sint explicabo soluta adipisci natus fuga
              doloremque, ipsam aliquam ut voluptate debitis, voluptatum
              consequatur quisquam laboriosam, labore tempore.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium illum qui et. Sint explicabo soluta adipisci natus fuga
              doloremque, ipsam aliquam ut voluptate debitis, voluptatum
              consequatur quisquam laboriosam, labore tempore.
            </p>
            <hr />
            <p>Caption, credit, source</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="panel2-image-2">
      <b-container class="parent">
        <b-row class="image-row">
          <b-col cols="12">
            <div class="image-mask"></div>
            <img src="https://placeimg.com/600/240/animals" alt="" srcset="" />
          </b-col>
        </b-row>
        <b-row>
          <b-col
            sm="10"
            offset-sm="1"
            lg="10"
            offset-lg="1"
            xl="8"
            offset-xl="2"
            class="text-left text-white content"
          >
            <h1 class="text-center">Title</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium illum qui et. Sint explicabo soluta adipisci natus fuga
              doloremque, ipsam aliquam ut voluptate debitis, voluptatum
              consequatur quisquam laboriosam, labore tempore.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium illum qui et. Sint explicabo soluta adipisci natus fuga
              doloremque, ipsam aliquam ut voluptate debitis, voluptatum
              consequatur quisquam laboriosam, labore tempore.
            </p>
            <hr />
            <p>Caption, credit, source</p>
          </b-col>
        </b-row>
      </b-container>
    </section> -->
    <!-- <div style="background: red; height: 200px; width: 100%"></div> -->
    <section class="third-try">
      <div class="col">
        <b-container>
          <b-row class="image-row">
            <b-col>
              <div class="image-mask"></div>
              <img src="https://placeimg.com/600/337/arch" alt="" srcset="" />
            </b-col>
          </b-row>
          <b-row class="align-items-center content-row">
            <b-col
              sm="10"
              offset-sm="1"
              lg="10"
              offset-lg="1"
              xl="8"
              offset-xl="2"
              class="text-left text-white"
            >
              <h2 class="text-center">Title</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, vero repudiandae iste, nihil corrupti at, totam
                impedit eos cum consectetur soluta molestiae tempora sunt
                officiis? Expedita autem dolorem doloribus obcaecati.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, vero repudiandae iste, nihil corrupti at, totam
                impedit eos cum consectetur soluta molestiae tempora sunt
                officiis? Expedita autem dolorem doloribus obcaecati.
              </p>
              <!-- <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, vero repudiandae iste, nihil corrupti at, totam
                impedit eos cum consectetur soluta molestiae tempora sunt
                officiis? Expedita autem dolorem doloribus obcaecati.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium, vero repudiandae iste, nihil corrupti at, totam
                impedit eos cum consectetur soluta molestiae tempora sunt
                officiis? Expedita autem dolorem doloribus obcaecati.
              </p> -->
              <hr />
              <p>Caption, credit, source</p>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "panel2-image"
};
</script>
<style lang="scss" scoped>
section {
  margin: 100px 0;
}
.parent {
  height: 600px;
  min-height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  text-align: center;
}
hr {
  border-top: 1px solid #fff;
}
.image-mask {
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.content {
  padding-bottom: 30px;
  padding-top: 30px;
}
.image-row {
  img {
    object-fit: cover;
    width: 100%;
  }
}
.panel2-image-2 {
  .parent {
    height: auto;
    min-height: auto;
  }
}
.third-try {
  position: relative;

  .container {
    position: relative;
  }
  .content-row {
    min-height: 20rem;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}
@media (min-width: 576px) {
  .image-row {
    height: 100%;
    left: 15px;
    position: absolute;
    top: 0;
    width: 100%;

    img {
      height: 100%;
    }
  }
  .third-try .content-row {
    min-height: 405px;
  }
}
@media (min-width: 768px) {
  .third-try .content-row {
    min-height: 405px;
  }
}
@media (min-width: 992px) {
  .third-try .content-row {
    min-height: 540px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1095px;
  }
  .third-try .content-row {
    min-height: 615px;
  }
}
</style>
