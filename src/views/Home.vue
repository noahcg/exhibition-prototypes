<template>
  <div>
    <section class="panel home-panel">
      <b-container>
        <b-row>
          <b-col class="column-left">
            <a href="#">Link 1</a>
            <img src="https://picsum.photos/id/278/500/500" alt />
          </b-col>
          <b-col class="column-right">
            <a href="#">Link 2</a>
            <p
              class="text-left"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem nisi alias enim consequuntur. Debitis consequuntur minus fugiat nam provident assumenda ipsum eligendi quam! Odio nesciunt, iste quas reprehenderit fugit rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis odio molestiae beatae, atque provident maiores quam ad, non libero est dicta iusto incidunt maxime, numquam exercitationem quae ab dolore.</p>
            <p
              class="text-left"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem nisi alias enim consequuntur. Debitis consequuntur minus fugiat nam provident assumenda ipsum eligendi quam! Odio nesciunt, iste quas reprehenderit fugit rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corporis odio molestiae beatae, atque provident maiores quam ad, non libero est dicta iusto incidunt maxime, numquam exercitationem quae ab dolore.</p>
          </b-col>
        </b-row>
      </b-container>
      <flyout button-image="https://picsum.photos/id/386/100/100">
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
    <section>
      <b-container>
        <b-row>
          <h2>second</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
          <a href="#">Link 3</a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row>
          <h2>third</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ipsa error, impedit accusamus, velit similique perferendis saepe architecto cupiditate voluptates eum enim eaque cum magnam veritatis illum molestias nostrum quasi.</p>
        </b-row>
      </b-container>
    </section>
  </div>
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
      flyout: {
        title: "Mohammed",
        subtitle: "The Mullah/Father/Husband"
      }
    };
  }
};
</script>
