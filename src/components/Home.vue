<template>
  <div>
    <HomeInfo/>
    <Modal openKnowMoreModal/>
  </div>
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
