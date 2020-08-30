<template>
  <div class="wrapper" :class="{login:isLogin,'no-login':!isLogin}">

    <template v-if="!isLogin">
      <h1>Speak out freely</h1>
      <p>精品博客汇聚</p>
      <div class="buttonWrapper">
        <a-button type="primary" class="login">立即登录</a-button>
        <a-button>注册账号</a-button>
      </div>
    </template>

    <template v-if="isLogin">
      <h1>Speak out freely</h1>
      <a-icon type="edit" class="edit"/>
      <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&
      d=identicon" alt="">
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import {Component} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  isLogin = false;
}
</script>

<style scoped lang="scss">
.wrapper.no-login {
  color: #fff;
  background: #0073AA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  h1 {
    color: #fff;
    font-size: 32px;
  }
  .buttonWrapper {
    margin-top: 24px;
    .login {
      margin-right: 36px;
      background: #FF8000;
    }
  }
}

.wrapper.login {
  background: #0073AA;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  h1 {
    font-size: 32px;
    color: white;
    line-height: 32px;
    margin: 0;
    flex: 1;
  }
  .edit {
    font-size: 30px;
    color: #fff;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border: solid 1px #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
}
</style>