<template>
  <section>
    <div class="row work-row align-center">
      <ShowcaseButton
        direction="left"
        :imagePath="require(`@/assets/media/left.svg`)"
        :onClickHandler="showPreviousWork"
      />
      <Showcase :work="work"/>
      <ShowcaseButton
        direction="right"
        :imagePath="require(`@/assets/media/left.svg`)"
        :onClickHandler="showNextWork"
      />
    </div>
  </section>
</template>
<script>
import workList from "./data/workList";
import Showcase from "./Showcase";
import ShowcaseButton from "./ShowcaseButton";
export default {
  components: {
    Showcase: Showcase,
    ShowcaseButton: ShowcaseButton
  },
  data() {
    return {
      work: workList[0],
      workListLength: workList.length,
      index: 0,
      nextPage: "",
      previousPage: "",
      pathToId: {
        iiw: 0,
        sisda: 1,
        doding: 2,
        bpr: 3
      },
      initialPage: true,
      history: {}
    };
  },
  methods: {
    showNextWork() {
      const index = (this.index + 1) % this.workListLength;
      if (this.initialPage) {
        this.$router.push("/work/" + workList[index].detailLink);
      } else {
        this.$router.push(workList[index].detailLink);
      }
      this.work = workList[index];
      this.index = index;
    },
    showPreviousWork() {
      const index =
        (((this.index - 1) % this.workListLength) + this.workListLength) %
        this.workListLength; // because JS modules can return negative too!
      if (this.initialPage) {
        this.$router.push("/work/" + workList[index].detailLink);
      } else {
        this.$router.push(workList[index].detailLink);
      }
      this.work = workList[index];
      this.index = index;
    }
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>
