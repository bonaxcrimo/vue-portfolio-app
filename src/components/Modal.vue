<template>
  <div class="row">
    <div class="column small-12 text-center">
      <div
        class="modal-know-more-wrapper"
        v-bind:class="[modalKnowMoreWrapperClass]"
        ref="modalKnowMoreWrapper"
      >
        <a class="know-more raleway" v-on:click="openKnowMoreModal">Know More</a>
        <div
          class="custom-modal-wrapper"
          v-bind:class="customModalWrapperClass"
          v-on:click="this.closeKnowMoreModal"
          ref="customModalWrapper"
        />
        <div
          class="custom-modal custom-modal-none row align-center align-middle"
          v-bind:class="customModalClass"
          ref="customModal"
        >
          <div
            class="column small-10 medium-10 large-10 small-centered column-card"
            v-bind:class="columnCardClass"
            ref="columnCard"
          >
            <i class="custom-modal-close-button" v-on:click="closeKnowMoreModal">x</i>
            <div class="row align-center">
              <div class="small-10 medium-3 column">
                <router-link class="nav-link" to="/about">
                  <div class="card know-more-modal know-more-modal-card align-middle">
                    <img src="@/assets/media/about.svg" alt="Bona Tua | About Icon">
                    <p class="raleway">About</p>
                  </div>
                </router-link>
              </div>
              <div class="small-10 medium-3 column">
                <router-link class="nav-link" to="/work">
                  <div class="card know-more-modal know-more-modal-card align-middle">
                    <img src="@/assets/media/work.svg" alt="Bona Tua | Work Icon">
                    <p class="raleway">Work</p>
                  </div>
                </router-link>
              </div>
              <div class="small-10 medium-3 column end">
                <router-link class="nav-link" to="/contact">
                  <div class="card know-more-modal know-more-modal-card align-middle">
                    <img src="@/assets/media/contact.svg" alt="Bona Tua | Contact Icon">
                    <p class="raleway">Contact</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require("@/assets/css/modal.scss");
export default {
  data() {
    return {
      modalKnowMoreWrapperClass: "",
      customModalClass: "",
      customModalWrapperClass: "display-none",
      columnCardClass: "display-none"
    };
  },
  methods: {
    openKnowMoreModal() {
      this.modalKnowMoreWrapperClass = "modal-know-more-wrapper-height";
      this.customModalClass = "custom-modal-final";
      this.customModalWrapperClass = "display-block";
      this.columnCardClass = "display-block";
    },
    closeKnowMoreModal() {
      this.modalKnowMoreWrapperClass = "";
      this.customModalClass = "";
      this.customModalWrapperClass = "display-none";
      this.columnCardClass = "display-none";
    }
  }
};
</script>

