<template>
  <div class="wrapper" :class="{login:token,'no-login':!token}">

    <template v-if="!token">
      <h1>Speak out freely</h1>
      <p>精品博客汇聚</p>
      <div v-if="['/login', '/register'].indexOf(currentPath)===-1" class="buttonWrapper">
        <a-button type="primary" class="login" @click="jumpRoute('/login')">立即登录</a-button>
        <a-button @click="jumpRoute('/register')">注册账号</a-button>
      </div>
      <div v-else class="image-wrapper">
        <img src="@/assets/burt.png" alt="">
      </div>
    </template>

    <template v-if="token">
      <h1 @click="jumpRoute('/')">Speak out freely</h1>
      <a-icon type="edit" class="edit" @click="jumpRoute('/create')" />
      <a-popover trigger="hover">
        <template slot="content">
          <div class="menu">
            <a-button class="operate" @click="jumpRoute('/myself')">个人中心</a-button>
            <a-button class="operate" @click="logout">退出登录</a-button>
          </div>
        </template>
        <img class="avatar" :src="avatar" alt="">
      </a-popover>
      <span class="welcome">欢迎，{{username}}</span>
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
  @Getter username?: string
  get currentPath() {
    return this.$route.path
  }
  jumpRoute(path: string) {
    this.$router.push(path)
  }
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
  .image-wrapper{
    width: 120px;
    img{width: 100%;}
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
    cursor: pointer;
    flex: 1;
  }
  .edit {
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }
  .avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
    cursor: pointer;
  }
  .welcome{
    color: #95a5a6;
    margin: 0 40px 0 16px;
  }
}
.menu{
  display: flex;
  flex-direction: column;
  .operate{
    background: none;
    border: none;
    padding: 0;
  }
}
</style>
