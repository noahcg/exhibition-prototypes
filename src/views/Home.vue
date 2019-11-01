<template>
  <div>
    <section class="panel home-panel">
      <b-container>
        <b-row>
          <b-col class="py-4">
            <h1 class="text-left text-white">Chapter Navbar</h1>
          </b-col>
        </b-row>
        <chapter-navbar />
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import ChapterNavbar from "@/components/ChapterNavbar.vue";

export default {
  name: "home",
  components: {
    ChapterNavbar
  }
};
</script>
