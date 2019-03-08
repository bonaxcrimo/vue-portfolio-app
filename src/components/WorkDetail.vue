<template>
  <section>
    <div class="row align-center">
      <div class="column small-12 text-center">
        <h3 class="raleway weight-medium work-detail-set-heading">{{work.title}}</h3>
        <p>{{work.jobType}}</p>
      </div>
      <div class="row align-center">
        <div class="column small-10 medium-5 text-center">
          <img :src="require(`@/assets/media/work/${work.mainImg}`)">
        </div>
        <div class="column small-12 text-center">
          <a
            class="hollow button resume-button roboto fix-width"
            :href="work.website"
            target="_blank"
            rel="noopener noreferrer"
            v-if="work.website!==''"
          >Website</a>
          <a
            class="hollow button resume-button roboto fix-width"
            :href="work.github"
            target="_blank"
            rel="noopener noreferrer"
            v-if="work.github!==''"
          >Github</a>
        </div>
      </div>
    </div>
    <!-- about -->
    <div class="row align-center">
      <div class="column small-10">
        <h3 class="raleway about-set-heading">About</h3>
        <div v-for="info in work.about" :key="info">
          <p class="roboto">{{info}}</p>
        </div>
      </div>
    </div>
    <!-- tech sheet -->
    <div class="row align-center">
      <div class="column small-10">
        <h3 class="raleway about-set-heading">Technical Sheet</h3>
        <p v-if="work.otherTech">{{work.otherTech}}</p>
        <p v-if="work.frontEndTech">
          <b>Front-End:</b>
          <br>
          {{work.frontEndTech}}
        </p>

        <p v-if="work.backEndTech">
          <b>Back-End:</b>
          <br>
          {{work.backEndTech}}
        </p>
      </div>
    </div>
    <!-- feature -->
    <div class="row align-center">
      <div class="column small-10">
        <h3 class="raleway about-set-heading">Features</h3>
        <ul v-for="feature in work.features" v-bind:key="feature">
          <li>{{feature}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import workDetails from "./data/workDetails";
export default {
  data() {
    return {
      work: workDetails.iiw,
      pathToId: {
        iiw: "iiw",
        sisda: "sisda",
        doding: "doding",
        bpr: "bpr"
      },
      redirect: false
    };
  },
  props: ["id"],
  created() {
    const workId = this.pathToId[this.$route.params.id];
    if (workId === undefined) {
      this.$router.push("404");
    } else {
      this.work = workDetails[workId];
    }
  }
};
</script>

