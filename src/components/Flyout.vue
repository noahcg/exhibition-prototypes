<template>
  <section class="flyout">
    <b-button class="open-button" @click="openFlyout" ref="openButton">
      <img v-bind:src="buttonImage" alt />
    </b-button>
    <div :class="['flyout-panel', {opened: isOpen}]" ref="flyoutPanel">
      <b-container>
        <b-row>
          <b-col md="10" offset-md="1" class="text-right">
            <button class="close-button" @click="closeFlyout" ref="closeButton">&times;</button>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="10" offset-md="1">
            <slot name="heading"></slot>
            <slot name="media"></slot>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </section>
</template>

<script>
export default {
  name: "Flyout",
  props: {
    buttonImage: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false,
      focusedElementBeforeFlyout: "",
      flyoutPanel: "",
      firstTabStop: "",
      lastTabStop: ""
    };
  },
  methods: {
    openFlyout: function() {
      this.isOpen = true;
      this.focusedElementBeforeFlyout = document.activeElement;

      this.flyoutPanel = this.$refs["flyoutPanel"];

      this.flyoutPanel.addEventListener("keydown", this.trapTabKey);

      let focusableElementsString = "button:not([disabled]), audio";

      let focusableElements = this.flyoutPanel.querySelectorAll(
        focusableElementsString
      );

      focusableElements = Array.prototype.slice.call(focusableElements);

      this.firstTabStop = focusableElements[0];
      this.lastTabStop = focusableElements[focusableElements.length - 1];

      this.firstTabStop.focus();
    },
    trapTabKey: function(e) {
      if (e.keyCode === 9) {
        if (e.shiftKey) {
          if (document.activeElement === this.firstTabStop) {
            e.preventDefault();
            this.lastTabStop.focus();
          }
        } else {
          if (document.activeElement === this.lastTabStop) {
            e.preventDefault();
            this.firstTabStop.focus();
          }
        }
      }
      if (e.keyCode === 27) {
        this.isOpen = false;
        this.$refs["openButton"].focus();
      }
    },
    closeFlyout: function() {
      this.isOpen = false;
      this.$refs["openButton"].focus();
    }
  }
};
</script>
