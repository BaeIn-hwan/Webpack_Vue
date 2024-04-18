<template>
  <h1>Minimal Vue Webpack</h1>
  <div>
    <p>글글</p>
    <span>{{ text ? "true" : "false" }}</span>
    <template v-if="text">aaa</template>
    <template v-else> bbbb</template>
  </div>
  <button type="button" @click="onChangeText">테스트</button>
  <hello-world :word="text" />

  <div>
    <div>
      <router-link to="/test">Test</router-link> /
      <router-link to="/goods">goods</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

const text = ref<boolean>(false);

const onChangeText = () => {
  text.value = !text.value;
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 20px;
}

div {
  font-size: 14px;
  p {
    color: blue;
  }
}
</style>
