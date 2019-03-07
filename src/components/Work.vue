<template>
  <h1>{{row}}{{id}}</h1>
</template>
<script>
import workList from "./data/workList";
export default {
  data() {
    return {
      row: workList[0].name,
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>
