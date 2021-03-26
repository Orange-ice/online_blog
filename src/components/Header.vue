<template>
  <div class="wrapper" :class="{login:token,'no-login':!token}">

    <template v-if="!token">
      <h1>Speak out freely</h1>
      <p>精品博客汇聚</p>
      <div class="buttonWrapper">
        <a-button type="primary" class="login" @click="$router.push('/login')">立即登录</a-button>
        <a-button @click="$router.push('/register')">注册账号</a-button>
      </div>
    </template>

    <template v-if="token">
      <h1>Speak out freely</h1>
      <a-icon type="edit" class="edit"/>
      <img class="avatar" :src="avatar" alt="">
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Header extends Vue {
  @Getter avatar?: string
  @Getter token?: string
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
  justify-content: center;
  height: 56px;
  padding: 0 16px;
  flex-direction: row;
  h1 {
    font-size: 32px;
    color: white;
    line-height: 32px;
    flex: 1;
    margin: 0 0 0 142px;
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
    margin-right: 150px;
  }
}
</style>
