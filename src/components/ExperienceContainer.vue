<template>
  <section>
    <div class="row align-center">
      <div class="column small-10">
        <h3 class="raleway about-set-heading">Experience</h3>
      </div>
    </div>

    <div class="experiance-set" v-for="experience in experiences" :key="experience.company">
      <Experience :experience="experience"/>
    </div>
  </section>
</template>
<script>
import Experience from "./Experience";
export default {
  components: {
    Experience: Experience
  },
  props: ["experiences"]
};
</script>
