<template>
  <div class="column small-12 medium-12 large-12 end">
    <span class="skill-name roboto">{{name}}</span>
    <div
      class="skill-point-set"
      v-html="createSpan('dark-circle',n) + createSpan('hollow-circle',10-n)"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    createSpan(spanClass, m) {
      let row = "";
      for (let i = 0; i < m; i++) {
        row += "<span class='" + spanClass + "' ></span>";
      }
      return row;
    }
  },
  props: ["name", "n"]
};
</script>
