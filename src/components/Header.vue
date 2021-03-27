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
      <div class="menu">
        <span>我的博客</span>
        <span>关于Burt</span>
      </div>
      <a-icon type="edit" class="edit"/>
      <a-popover trigger="click">
        <template slot="content">
          <a-button class="logout" @click="logout">退出登录</a-button>
        </template>
        <img class="avatar" :src="avatar" alt="">
      </a-popover>
      <span class="welcome">欢迎，username</span>
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
  logout() {
    this.$store.dispatch('user/logout')
    this.$router.replace('/login')
  }
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
    color: #ecf0f1;
    line-height: 32px;
    margin: 0 0 0 40px;
  }
  .menu{
    margin-left: 40px;
    font-size: 16px;
    color: #f1c40f;
    flex: 1;
    span{cursor: pointer;}
    span:not(:first-child){margin-left: 16px;}
    span:hover{color: #34495e;}
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
    margin-left: 20px;
  }
  .welcome{
    color: #95a5a6;
    margin: 0 40px 0 16px;
  }
}
.logout{
  background: none;
  border: none;
  padding: 0;
}
</style>
