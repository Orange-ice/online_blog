<template>
  <footer>
    <p>Copyright © 2020-present Burt</p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Footer extends Vue {

}
</script>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d7d7d7;
  color: #666;
  p{
    padding: 10px;
    margin: 0;
    font-size: 14px;
  }
}
</style>