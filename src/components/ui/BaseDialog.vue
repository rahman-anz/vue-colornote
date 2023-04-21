<template>
  <div class="backdrop">
    <dialog open>
      <div class="message-box" v-if="fixed">
        <h2></h2>
        <slot name="message"></slot>
      </div>
      <div class="message-box" v-else>
        <h2>Message</h2>
        <slot name="message"></slot>
        <base-button><slot name="action">Okay</slot></base-button>
      </div>
    </dialog>
  </div>
</template>
<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {},
};
</script>
<style scoped>
.message-box {
  height: 5rem;
  display: flex;
  justify-content: center;
  background-color: brown;
}
</style>
