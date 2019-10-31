<template>
  <section>
    <audio
      id="audio1"
      width="480"
      preload="auto"
      data-able-player
      data-transcript-div="transcripts"
    >
      <source type="audio/mpeg" v-bind:src="source" />
      <track kind="captions" v-bind:src="captions" srclang="en" label="English" />
    </audio>
    <div id="transcripts" class="text-left"></div>
  </section>
</template>

<script>
export default {
  name: "audioplayer",
  props: {
    source: {
      type: String,
      required: true
    },
    captions: {
      type: String,
      required: true
    }
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      // The page was just reloaded. Clear the value from local storage
      // so that it will reload the next time this page is visited.
      localStorage.removeItem("reloaded");
    } else {
      // Set a flag so that we know not to reload the page twice.
      localStorage.setItem("reloaded", "1");
      // location.reload();
    }
  }
};
</script>