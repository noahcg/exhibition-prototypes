<template>
  <div id="media-player">
    <video ref="mediaVideo" loop>
      <source src="videos/flowers.mp4" type="video/mp4" />
    </video>
    <div id="media-controls">
      <stat-circle percentage="20"></stat-circle>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import gsap from "gsap";
import StatCircle from "../components/StatCircle.vue";
export default {
  name: "home",
  props: ["percentage"],
  components: {
    statCircle: StatCircle
  },
  data: function() {
    return {
      mediaPlayer: null
    };
  },
  mounted: function() {
    this.mediaPlayer = this.$refs.mediaVideo;
    // this.mediaPlayer.controls = false;
    this.mediaPlayer.addEventListener(
      "timeupdate",
      this.updateProgressBar,
      false
    );

    var $statCircle = document.querySelectorAll(".stat-circle circle");
    for (var i = 0; i < $statCircle.length; i++) {
      var p = parseFloat($statCircle[i].dataset.percentage);
      var off = -51 - (51 / 100) * p;
      new gsap.to($statCircle[i], 0.8, {
        strokeDashoffset: off
      });
    }
  },
  methods: {
    updateProgressBar: function() {
      var progressBar = this.$refs.progressBar;
      var percentage = Math.floor(
        (100 / this.mediaPlayer.duration) * this.mediaPlayer.currentTime
      );
      progressBar.value = percentage;
      progressBar.innerHTML = percentage + "% played";
    }
  }
};
</script>
<style lang="scss" scoped>
#media-controls {
  background: #fff;
  height: 200px;

  progress[value] {
    -webkit-appearance: none;
    appearance: none;

    width: 250px;
    height: 5px;
  }
}
.stat-circle {
  width: 75px;
  circle.bg {
    fill: none;
    stroke: #f1f1f1;
    stroke-width: 0.4;
  }
  circle.progress {
    fill: none;
    stroke: #ff3a42;
    stroke-width: 0.8;
    stroke-dasharray: 51 51;
    stroke-dashoffset: -51;
    stroke-linecap: round;
  }
  text {
    font-size: 5px;
    text-anchor: middle;
    fill: #bbb;
  }
}
</style>