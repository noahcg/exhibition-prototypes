<template>
  <div>
    <section>
      <figure class="intro-background">
        <img src="images/hero-bg.jpg" alt="A Rohingya Village" />
      </figure>
      <b-container>
        <b-row class="intro">
          <b-col cols="12" md="10" offset-md="1" xl="8" offset-xl="2">
            <h1>Stories</h1>
            <p
              class="text-left"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis in minima a reiciendis consectetur provident aut quis voluptates, tenetur porro quidem aperiam libero commodi pariatur laboriosam illo nihil quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis in minima a reiciendis consectetur provident aut quis voluptates, tenetur porro quidem aperiam libero commodi pariatur laboriosam illo nihil quo!</p>
          </b-col>
        </b-row>
        <b-row class="citizens">
          <b-col xl="10" offset-xl="1">
            <b-row>
              <b-col class="citizen" cols="12" sm="6" md="4" xl="4">
                <router-link to="/story">
                  <div class="citizen-elements">
                    <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                    <p>Title Goes Here</p>
                  </div>
                </router-link>
              </b-col>
              <b-col class="citizen" cols="12" sm="6" md="4" xl="4">
                <div class="citizen-elements">
                  <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                  <p>Title Goes Here</p>
                </div>
              </b-col>
              <b-col class="citizen" cols="12" sm="6" md="4" xl="4">
                <div class="citizen-elements">
                  <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                  <p>Title Goes Here</p>
                </div>
              </b-col>
              <b-col class="citizen" cols="12" sm="6" md="4" xl="4">
                <div class="citizen-elements">
                  <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                  <p>Title Goes Here</p>
                </div>
              </b-col>
              <b-col class="citizen" cols="12" sm="6" md="4" xl="4">
                <div class="citizen-elements">
                  <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                  <p>Title Goes Here</p>
                </div>
              </b-col>
              <b-col class="citizen" cols="12" sm="6" md="4" xl="4">
                <div class="citizen-elements">
                  <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                  <p>Title Goes Here</p>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      title: "The Record Keeper",
      name: "Jomila",
      subtitle: "The Mother/Wife"
    };
  }
};
</script>
<style lang="scss">
body {
  background-color: #282828 !important;
  margin: 0 !important;
  padding: 0 !important;
}

.intro-background {
  display: block;
  position: absolute;
  top: 0;
  left: 0;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    box-shadow: inset 0px -139px 40px -38px rgba(40, 40, 40, 1);
    height: 130px;
    width: 100%;
  }
}
.intro-background img {
  height: 100%;
  left: 0;
  min-height: 100vh;
  min-width: 100vw;
  -o-object-fit: cover;
  object-fit: cover;
  // position: absolute;
  top: 0;
  width: 100%;
  // mask-image: linear-gradient(
  //   to bottom,
  //   rgba(0, 0, 0, 1) 60%,
  //   rgba(0, 0, 0, 0) 80%
  // );
}

.intro {
  color: #fff;
}

.citizen {
  height: 150px;
  margin-bottom: 20px;
  overflow: hidden;
  padding-bottom: 5px;
  padding-top: 5px;

  &:last-child {
    margin-bottom: 0;
  }
}

.citizen a {
  cursor: pointer;
}

.citizen-elements {
  box-shadow: 0 0 7px 0px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.citizen-elements img {
  left: 0;
  position: absolute;
  top: -30px;
  width: 100%;
  z-index: 0;
}

.citizen-elements p {
  background-color: rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(to bottom, #bd9727, #bd9727);
  background-size: 75px 2px;
  background-position: 20px 85px;
  background-repeat: no-repeat;
  bottom: 0;
  height: 100%;
  color: #fff;
  margin: 0;
  padding: 95px 20px 20px;
  position: absolute;
  text-align: left;
  width: 100%;
  z-index: 1;
}

@media (min-width: 425px) and (max-width: 576px) {
  .citizen-elements img {
    top: -80px;
  }
}

@media (min-width: 768px) {
  .intro {
    margin-bottom: 30px;
    padding: 40px 0 0;
  }
  .intro-background {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
  .intro-background img {
    height: 100%;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    -o-object-fit: cover;
    object-fit: cover;
    // position: absolute;
    top: 0;
    width: 100%;
  }
  .citizen {
    border-radius: 0;
    height: 300px;
  }
  .citizen-elements {
    border-radius: 0;
    // box-shadow: none;
  }
  .citizen-elements img {
    top: 0;
  }
  .citizen-elements p {
    background-color: rgba(0, 0, 0, 0.8);
    background-image: linear-gradient(to bottom, #bd9727, #bd9727);
    background-size: 100px 2px;
    background-position: 50% 25px;
    background-repeat: no-repeat;
    bottom: 0;
    color: #fff;
    height: auto;
    margin: 0;
    padding: 35px 30px 25px;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 1;
  }
}
@media (min-width: 992px) {
}
</style>
