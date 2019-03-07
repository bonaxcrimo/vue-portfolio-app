<template>
  <div class="experiance">
    <div class="row">
      <div class="column small-10 small-offset-1 medium-5 medium-offset-1 text-left">
        <h6>{{experience.position}}</h6>
        <p>{{experience.company}}</p>
      </div>
      <div class="column small-10 small-offset-1 medium-5 medium-offset-0 end">
        <p class="show-for-medium text-right">{{experience.startDate}}</p>
      </div>
    </div>
    <div class="row align-center">
      <div class="column small-10 medium-10">
        <p class="text-justify">{{experience.description}}</p>
        <hr>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["experience"]
};
</script>

