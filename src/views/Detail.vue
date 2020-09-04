<template>
  <div class="wrapper">
    <div class="title">
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
      <div class="titleText">
        <h4>前端异步大揭秘</h4>
        <p><router-link to="/user">方方</router-link>发布于三天前</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Detail extends Vue {

}
</script>

<style scoped lang="scss">
.wrapper {
  .title {
    display: flex;
    margin: 24px 150px 0;
    padding-bottom: 32px;
    border-bottom: solid 1px #E1E1E1;
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .titleText {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 22px;
      h4 {margin: 0;font-size: large}
      p {margin: 0;font-size: smaller;color: #999999}
    }
  }
}
</style>