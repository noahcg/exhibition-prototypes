<template>
  <section class="hero-panel">
    <div class="screen"></div>
    <b-container>
      <b-row class="pt-4">
        <b-col md="8" offset-md="2">
          <h1>{{ title }}</h1>
          <p
            class="text-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nihil qui mollitia provident minima optio hic fugit vitae eligendi fuga eos dicta! Dolorum, expedita dolore. Maiores deserunt illum at error.</p>
          <p
            class="text-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nihil qui mollitia provident minima optio hic fugit vitae eligendi fuga eos dicta! Dolorum, expedita dolore. Maiores deserunt illum at error.</p>
          <p
            class="text-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, nihil qui mollitia provident minima optio hic fugit vitae eligendi fuga eos dicta! Dolorum, expedita dolore. Maiores deserunt illum at error.</p>
        </b-col>
      </b-row>
    </b-container>
    <flyout button-image="https://picsum.photos/id/133/100/100">
      <template v-slot:heading>
        <p class="title text-left">{{ flyout.title }}</p>
        <p class="sub-title text-left">{{ flyout.subtitle }}</p>
      </template>
      <template v-slot:media>
        <audio-player
          source="https://encyclopedia.ushmm.org/asset/7a639b01-b5dc-4506-bd9c-b56ad6fba978.mp3"
          captions="/media/lyrics.vtt"
        />
      </template>
    </flyout>
  </section>
</template>

<script>
// @ is an alias to /src
import Flyout from "@/components/Flyout.vue";
import AudioPlayer from "@/components/AudioPlayer.vue";

export default {
  name: "home",
  components: {
    Flyout,
    AudioPlayer
  },
  data() {
    return {
      title: "This is a hero panel",
      flyout: {
        title: "Showife",
        subtitle: "Brother/Son/Friend"
      }
    };
  }
};
</script>
