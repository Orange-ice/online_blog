<template>
<div class="loginWrapper">
  <LoginOrRegister :login-status="true" />
  <p class="notice">没有账号？<router-link to="/register">注册新用户</router-link></p>
</div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import LoginOrRegister from '@/components/LoginOrRegister'


@Component({
  components: {LoginOrRegister}
})
export default class Login extends Vue {

}
</script>

<style scoped lang="scss">

.loginWrapper{
  .notice{
    text-align: center;
  }
}
</style>
