<template>
<div class="loginWrapper">
  <h4>用户名</h4>
  <a-input placeholder="请输入用户名" v-model="userInfo.username" />
  <p class="error">当前用户已被注册</p>
  <h4>密码</h4>
  <a-input-password placeholder="请输入密码" v-model="userInfo.password" />
  <a-button type="primary" @click="login">立即登录</a-button>
  <p class="notice">没有账号？<router-link to="/register">注册新用户</router-link></p>
</div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  userInfo = {
    username: 'Burt',
    password: '123456'
  }
  login() {
    this.$store.dispatch('user/login' ,this.userInfo).then(() => {
      this.$message.success('登录成功')
      this.$router.push('/')
    })
  }

}
</script>

<style scoped lang="scss">

.loginWrapper{
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
