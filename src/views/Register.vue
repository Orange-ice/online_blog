<template>
  <div class="registerWrapper">
    <LoginOrRegister />
    <p class="notice">已有账号？<router-link to="/login">直接登录</router-link></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import LoginOrRegister from '@/components/LoginOrRegister'
@Component({
  components: {LoginOrRegister}
})
export default class Register extends Vue {

}
</script>

<style scoped lang="scss">
.registerWrapper{
  .notice{
    text-align: center;
  }
}
</style>
