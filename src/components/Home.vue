<template>
  <section class="animated slideInUp">
    <HomeInfo/>
    <Modal openKnowMoreModal/>
  </section>
</template>
<script>
import HomeInfo from "./HomeInfo";
import Modal from "./Modal";
export default {
  components: {
    HomeInfo: HomeInfo,
    Modal: Modal
  }
};
</script>
