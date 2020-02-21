<template>
  <div>
    <h1 class="text-white">Panel 2 - Video</h1>
    <section class="video-panel">
      <div class="col">
        <b-container>
          <b-row class="image-row" ref="imageRow">
            <b-col>
              <div class="image-mask"></div>
              <img src="https://placeimg.com/600/337/arch" alt="" srcset="" />
            </b-col>
          </b-row>
          <b-row class="video-row hidden" ref="videoRow">
            <b-col class="text-white align-self-end" md="12" lg="12" xl="12">
              <h2>Who Are The Rohingya?</h2>
              <p>
                <button
                  @click="this.closeVideo"
                  class="close-button"
                  ref="closeButton"
                >
                  &times;
                </button>
              </p>
            </b-col>
            <b-col md="12" lg="12" xl="12">
              <video
                src="videos/flowers.mp4"
                ref="videoPlayer"
                controls
              ></video>
            </b-col>
          </b-row>
          <b-row class="align-items-center content-row" ref="contentRow">
            <b-col
              sm="10"
              offset-sm="1"
              lg="10"
              offset-lg="1"
              xl="8"
              offset-xl="2"
              class="text-left text-white"
            >
              <h2 class="text-center">Who Are The Rohingya?</h2>
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
              <button
                @click="this.playVideo"
                class="video-cta"
                ref="videoButton"
              >
                Play Video
              </button>
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
  name: "panel2-video",
  methods: {
    playVideo: function() {
      this.$refs.contentRow.classList.add("hidden");
      this.$refs.imageRow.classList.add("hidden");
      this.$refs.videoRow.classList.remove("hidden");
      this.$refs.videoPlayer.play();
      this.$refs.videoPlayer.focus();
    },
    closeVideo: function() {
      this.$refs.contentRow.classList.remove("hidden");
      this.$refs.imageRow.classList.remove("hidden");
      this.$refs.videoRow.classList.add("hidden");
      this.$refs.videoPlayer.pause();
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  margin: 100px 0;
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
  display: none;
  img {
    object-fit: cover;
    width: 100%;
  }
}
.video-panel {
  position: relative;

  .container {
    position: relative;
  }
  .content-row {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
.video-cta {
  display: none;
}
.video-row {
  h2,
  p,
  .close-button {
    display: none;
  }
  video {
    width: 100%;
  }
}
@media (min-width: 576px) {
  .image-row {
    display: flex;
    height: 100%;
    left: 15px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;

    &.hidden {
      visibility: hidden;
    }

    img {
      height: 100%;
    }
  }
  .video-row {
    height: 100%;
    left: 15px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    &.hidden {
      visibility: hidden;
    }

    h2 {
      display: block;
      float: left;
      margin: 0;
    }

    p {
      display: block;
      float: right;
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      display: inline;
      font-size: 3rem;
      line-height: 1;
      padding: 0;
    }
  }
  .video-panel .content-row {
    min-height: 405px;
    padding-bottom: 50px;
    padding-top: 50px;
    position: relative;
    z-index: 3;

    &.hidden {
      visibility: hidden;
    }
  }
  .video-cta {
    display: block;
  }
}
@media (min-width: 768px) {
  .video-panel .content-row {
    min-height: 405px;
  }
}
@media (min-width: 992px) {
  .video-panel .content-row {
    min-height: 540px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1095px;
  }
  .video-panel .content-row {
    min-height: 615px;
  }
}
</style>
