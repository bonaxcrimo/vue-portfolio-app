<template>
  <section>
    <div class="row align-center">
      <div class="column small-10">
        <h3 class="raleway about-set-heading">Skills</h3>
      </div>
    </div>
    <div class="skill-set" v-for="skill in skills" :key="skill.categoryName">
      <div class="row align-center" key="{i}">
        <div class="column small-10">
          <div class="row">
            <div class="column small-12">
              <h6>{{skill.categoryName}}</h6>
              <div class="row">
                <div v-for="set in skill.set" :key="set.name">
                  <Skill :name="set.name" :n="set.value"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Skill from "./Skill";
export default {
  data() {
    return {};
  },
  components: {
    Skill: Skill
  },
  props: ["skills"],
  methods: {
    setSkill(data) {
      let set = "";
      for (let i = 0; i < data.length; i++) {
        set += `<Skill :name="${data[i].name}" :n="${data[i].value}"/>`;
      }
      return set;
    }
  }
};
</script>

