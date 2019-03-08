<template>
  <div class="column small-10 medium-9 card portfolio-work">
    <div class="work-showcase-img-container">
      <img class="work-showcase-img" :src="require(`@/assets/media/work/${work.img}`)">
      <div class="work-showcase-img-detail text-center" v-bind:class="work.detailTextColor">
        <router-link class="hollow button work-showcase-img-button" :to="changeTo()">View Project</router-link>

        <p class="roboto weight-medium">{{work.what}}</p>
      </div>
    </div>
    <div class="work-title-div row">
      <div class="column small-12 medium-7">
        <p class="roboto">{{work.name}}</p>
        <p class="roboto weight-light">{{work.stack}}</p>
      </div>
      <div class="column small-12 medium-5 text-right">
        <p class="roboto">&nbsp;</p>
        <p class="roboto weight-light"></p>
        <span v-if="work.githubLink !== ''">
          <a :href="work.githubLink" target="_blank" rel="noopener noreferrer">Github</a>
          |
        </span>
        <span v-if="work.websiteLink !== ''">
          <a :href="work.websiteLink" target="_blank" rel="noopener noreferrer">Website</a>
          |
        </span>
        <router-link class="detail-link-button" :to="changeTo()">View Project</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: "@/assets/media/work" + this.work.img
    };
  },
  methods: {
    changeTo() {
      return "/work/" + this.work.detailLink + "/details/";
    }
  },
  props: ["work"]
};
</script>
