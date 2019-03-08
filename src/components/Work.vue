<template>
  <section>
    <div class="row work-row align-center">
      <Showcase :work="work"/>
    </div>
  </section>
</template>
<script>
import workList from "./data/workList";
import Showcase from "./Showcase";
export default {
  components: {
    Showcase: Showcase
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
      const index = (this.index + 1) % workListLength;
      if (this.initialPage) {
        this.history.push("/work/" + workList[index].detailLink);
      } else {
        this.history.push(workList[index].detailLink);
      }
      this.work = workList[index];
      this.index = index;
    },
    showPreviousWork() {
      const index =
        (((this.index - 1) % workListLength) + workListLength) & workListLength; // because JS modules can return negative too!
      if (this.initialPage) {
        this.history.push("/work/" + workList[index].detailLink);
      } else {
        this.history.push(workList[index].detailLink);
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
