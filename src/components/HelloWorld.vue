<template>
  <h1>HELLO WORLD!!</h1>
  {{ word ? "aa" : "bb" }}
</template>

<script lang="ts">
export default {
  name: "HelloWorld",
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup lang="ts">
const props = defineProps({
  word: {
    type: Boolean,
    default: "",
  },
});
</script>
