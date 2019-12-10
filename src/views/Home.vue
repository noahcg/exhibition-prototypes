<template>
  <div>
    <section>
      <figure class="intro-background">
        <img src="images/hero-bg.jpg" alt="A Rohingya Village" />
      </figure>
      <b-container>
        <b-row class="intro">
          <b-col cols="12" xl="8" offset-xl="2">
            <h1>Stories</h1>
            <p
              class="text-left"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis in minima a reiciendis consectetur provident aut quis voluptates, tenetur porro quidem aperiam libero commodi pariatur laboriosam illo nihil quo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi corporis in minima a reiciendis consectetur provident aut quis voluptates, tenetur porro quidem aperiam libero commodi pariatur laboriosam illo nihil quo!</p>
          </b-col>
        </b-row>
        <b-row class="citizens">
          <b-col xl="10" offset-xl="1">
            <b-row>
              <b-col class="citizen" cols="12" md="6" xl="4">
                <router-link to="/story">
                  <div class="citizen-elements">
                    <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                    <p>Title Goes Here</p>
                  </div>
                </router-link>
              </b-col>
              <b-col class="citizen" cols="12" md="6" xl="4">
                <div class="citizen-elements">
                  <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                  <p>Title Goes Here</p>
                </div>
              </b-col>
              <b-col class="citizen" cols="12" md="6" xl="4">
                <div class="citizen-elements">
                  <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                  <p>Title Goes Here</p>
                </div>
              </b-col>
              <b-col class="citizen" cols="12" md="6" xl="4">
                <div class="citizen-elements">
                  <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                  <p>Title Goes Here</p>
                </div>
              </b-col>
              <b-col class="citizen" cols="12" md="6" xl="4">
                <div class="citizen-elements">
                  <img src="images/Jomila.jpg" alt="Portait of Jomila - a Rohingya citizen" />
                  <p>Title Goes Here</p>
                </div>
              </b-col>
              <b-col class="citizen" cols="12" md="6" xl="4">
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
  display: none;
}

.intro {
  color: #fff;
}

.citizen {
  height: 300px;
  margin-bottom: 20px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }
}

.citizen-elements {
  height: 100%;
  position: relative;
}

.citizen-elements img {
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;
}

.citizen-elements p {
  background-color: rgba(0, 0, 0, 0.8);
  background-image: linear-gradient(to bottom, #bd9727, #bd9727);
  background-size: 100px 2px;
  background-position: 50% 25px;
  background-repeat: no-repeat;
  bottom: 0;
  color: #fff;
  margin: 0;
  padding: 35px 30px 25px;
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 1;
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
}
@media (min-width: 992px) {
}
</style>
