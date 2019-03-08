<template>
  <div v-bind:class="workClass" @click="onClickHandler">
    <img :src="imagePath">
  </div>
</template>
<script>
export default {
  data() {
    return {
      workClass: "work-nav work-nav-" + this.direction
    };
  },
  props: ["direction", "imagePath", "onClickHandler"]
};
</script>
