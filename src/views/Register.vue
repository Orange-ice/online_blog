<template>
  <div class="registerWrapper">
    <h4>用户名</h4>
    <a-input placeholder="请输入用户名" />
    <p class="error">当前用户已存在</p>
    <h4>密码</h4>
    <a-input-password placeholder="请输入密码" />
    <a-button type="primary">立即注册</a-button>
    <p class="notice">已有账号？<router-link to="/login">直接登录</router-link></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
@Component
export default class Register extends Vue {

}
</script>

<style scoped lang="scss">
.registerWrapper{
  width: 450px;
  margin: 100px auto auto;
  h4{
    font-size: large;
  }
  .error{
    margin-top: 8px;
    font-size: small;
    color: #f00;
  }
  button{
    margin-top: 32px;
    margin-bottom: 42px;
  }
  .notice{
    text-align: center;
  }
}
</style>