<template>
  <div>
    <section class="panel-single-image">
      <b-container class="no-padding">
        <b-row>
          <b-col class="left-column" sm="12" md="6">
            <img src="https://picsum.photos/800/800" alt="" />
            <div class="caption">
              <p>
                This is a caption.
                <em>This is emphasized text in a caption</em> this is even more
                text to see what happens where there is a lot of text in the
                caption area.
              </p>
            </div>
          </b-col>
          <b-col class="right-column" sm="12" md="6">
            <div class="panel-content">
              <h2>Who Are The Rohingya?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illo
                animi quis vel est placeat eius quaerat laborum pariatur
                consequuntur error consequatur dicta, odio nulla eaque nostrum
                accusamus, beatae iste!
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "panelone",
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
img {
  width: 100%;
}
.no-padding {
  padding: 0;
}
.panel-single-image .container {
  background: #ccc;
}
.panel-content {
  padding: 40px;

  h2,
  p {
    text-align: left;
  }
}
.left-column {
  position: relative;
}
.caption {
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  padding: 15px 30px;
  position: absolute;
  width: calc(100% - 30px);
}
.caption p {
  color: #fff;
  text-align: left;
}
</style>
