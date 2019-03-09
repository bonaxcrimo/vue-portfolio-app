<template>
  <section class="animated slideInUp">
    <AboutInfo></AboutInfo>
    <SkillContainer :skills="skills"/>
    <ExperienceContainer :experiences="experiences"/>
    <div class="row align-center">
      <div class="column small-10 small-centered text-center">
        <a
          class="hollow button resume-button roboto"
          href="/static/bonatua-resume.pdf"
          download
        >Download My Resume</a>
      </div>
    </div>
  </section>
</template>
<script>
import AboutInfo from "./AboutInfo";
import Skill from "./Skill";
import SkillContainer from "./SkillContainer";
import ExperienceContainer from "./ExperienceContainer";
import skills from "./data/skills";
import experiences from "./data/experiences";
export default {
  data() {
    return {
      skills: skills,
      experiences: experiences
    };
  },
  components: {
    AboutInfo: AboutInfo,
    SkillContainer: SkillContainer,
    ExperienceContainer: ExperienceContainer
  }
};
</script>
