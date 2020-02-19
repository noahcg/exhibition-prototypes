<template>
  <script id="stat-circle" type="x-template">
    <svg class="stat-circle" viewBox="1.6 1.6 16.8 16.8">
      <circle class="bg" cx="10" cy="10" r="8"/></circle>
      <circle class="progress" cx="10" cy="10" r="8" :data-percentage="percentage"/></circle>
      <text x="62%" y="70%">{{ percentage }}%</text>
    </svg>
  </script>
</template>

<script>
import gsap from "gsap";
export default {
  name: "stat-circle",
  props: {
    percentage: String
  },
  mounted: function() {
    var $statCircle = document.querySelectorAll(".stat-circle circle");
    for (var i = 0; i < $statCircle.length; i++) {
      var p = parseFloat($statCircle[i].dataset.percentage);
      var off = -51 - (51 / 100) * p;
      new gsap.to($statCircle[i], 0.8, {
        strokeDashoffset: off
      });
    }
  }
};
</script>