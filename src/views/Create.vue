<template>
  <div class="editWrapper">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <a-input/>
    <p class="message">限30个字</p>
    <h3>内容简介</h3>
    <a-textarea
        :auto-size="{ minRows: 2, maxRows: 6 }"
    />
    <p class="message">限30个字</p>
    <h3>文章内容</h3>
    <a-textarea
        :auto-size="{ minRows: 8, maxRows: 20 }"
    />
    <p class="message">限30个字</p>
    <a-button type="primary">立即创建</a-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Create extends Vue {

}
</script>

<style scoped lang="scss">
.editWrapper{
  h1{text-align: center}
  margin: 0 150px;
  .message{
    text-align: right;
  }
}
</style>