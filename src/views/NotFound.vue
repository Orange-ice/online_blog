<template>
<div>
  <h2>你要访问的页面不存在</h2>
  <p>点击<router-link to="/login">立即登录</router-link>
    或者<router-link to="/register">注册账号</router-link></p>
</div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
@Component
export default class NotFound extends Vue {

}
</script>

<style scoped lang="scss">
div{
  text-align: center;
  margin-top: 32px;
}
</style>