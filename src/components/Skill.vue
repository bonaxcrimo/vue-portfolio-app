<template>
  <div class="col-md-4">
    <span class="skill-name">{{name}}</span>
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
<style type="scss">
.dark-circle {
  width: 13px;
  height: 13px;
  background: #474747;
  border-radius: 100%;
  margin-right: 6px;
  display: inline-block;
}

.hollow-circle {
  width: 13px;
  height: 13px;
  border: 1px solid #474747;
  border-radius: 100%;
  margin-right: 6px;
  display: inline-block;
}
.skill-point-set {
  display: inline-block;
}

.skill-name {
  color: #4a4a4a;
  width: 100px;
  display: inline-block;
}

.balok {
  height: 20px;
  display: inline-block;
  border: 1px solid #4a4a4a;
}
</style>
