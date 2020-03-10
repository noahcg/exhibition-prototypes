<template>
  <div>
    <div class="video-area">
      <div class="overlay"></div>
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        ref="videoPlayer"
      >
        <source
          src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
          type="video/mp4"
        />
      </video>
      <div class="container h-100">
        <div class="d-flex h-100 text-center align-items-center">
          <div class="w-100 text-white">
            <h1 class="display-3">Burma's Path to Genocide</h1>
            <button
              class="btn text-white"
              @click="playPause()"
              v-html="buttonLabel"
            ></button>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex parent">
      <div class="items">
        <img src="https://placeimg.com/500/500/animals" alt="" />
      </div>
      <div class="items">
        <img src="https://placeimg.com/500/500/arch" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      buttonLabel: "<i class='far fa-pause-circle fa-3x'></i>"
    };
  },
  methods: {
    playPause: function() {
      if (this.$refs.videoPlayer.paused == true) {
        // Play the video
        this.$refs.videoPlayer.play();

        // Update the button text to 'Pause'
        this.buttonLabel = "<i class='far fa-pause-circle fa-3x'></i>";
      } else {
        // Pause the video
        this.$refs.videoPlayer.pause();

        // Update the button text to 'Play'
        this.buttonLabel = "<i class='far fa-play-circle fa-3x'></i>";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.video-area {
  position: relative;
  background-color: black;
  height: 75vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

.video-area video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

.video-area .container {
  position: relative;
  z-index: 2;
}

.video-area .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}
.parent {
  flex-direction: column;
}
.items {
  width: 100%;

  img {
    width: 100%;
  }
}
@media (min-width: 768px) {
  .parent {
    flex-direction: row;
  }
  .items {
    width: 50%;
  }
}
@media (pointer: coarse) and (hover: none) {
  .video-area {
    background: url("https://source.unsplash.com/XT5OInaElMw/1600x900") black
      no-repeat center center scroll;
  }
  .video-area video {
    display: none;
  }
}
</style>
