<template>
  <section>
    <AboutInfo></AboutInfo>
    <Skill name="Javascript" n="8"></Skill>
  </section>
</template>
<script>
import AboutInfo from "./AboutInfo";
import Skill from "./Skill";
export default {
  components: {
    AboutInfo: AboutInfo,
    Skill: Skill
  }
};
</script>
