<template>
  <div class="bg-light">
    <button v-on:click="openModal">Click</button>
    <open-modal v-show="showContent" v-on:from-child="closeModal">
      slotからモーダルウィンドウへ
    </open-modal>
  </div>
</template>

<script>
import OpenModal from './components/OpenModal.vue';

export default {
  components: {
    'open-modal': OpenModal,
  },
  data() {
    return {
      showContent: false,
    };
  },
  methods: {
    openModal() {
      this.showContent = true;
    },
    closeModal() {
      this.showContent = false;
    },
  },
};
</script>

<style>
.bg-light {
  background-color: rgb(255, 255, 255);
}
</style>