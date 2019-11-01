<template>
  <div>
    <section class="panel home-panel">
      <b-container>
        <b-row>
          <b-col class="py-4">
            <h1 class="text-left text-white">Audio Player</h1>
          </b-col>
        </b-row>
        <audio-player :source="data.source" :captions="data.transcript" />
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import AudioPlayer from "@/components/AudioPlayer.vue";

export default {
  name: "audiopage",
  components: {
    AudioPlayer
  },
  data() {
    return {
      data: {
        source: "",
        transcript: ""
      }
    };
  },
  mounted() {
    this.getAudioFile().then(data => {
      this.data = data.audio.muhammed;
    });
  },
  methods: {
    async getAudioFile() {
      let response = await fetch(`/data/data.json`);
      let data = await response.json();
      return data;
    }
  }
};
</script>
