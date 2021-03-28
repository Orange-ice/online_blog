<template>
<div class="loginWrapper">
  <a-form-model ref="form" :model="userInfo" :rules="rules">
    <a-form-model-item label="用户名" :colon="false" prop="username">
      <a-input placeholder="请输入用户名" v-model="userInfo.username" />
    </a-form-model-item>
    <a-form-model-item label="密码" :colon="false" prop="password">
      <a-input-password placeholder="请输入密码" v-model="userInfo.password" />
    </a-form-model-item>
  </a-form-model>
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
  rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 2, max: 8, message: '长度为 2~8', trigger: 'blur' },
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
    ]
  }
  async login() {
    let result
    try{
      result = await (this.$refs.form as Vue & { validate: () => boolean }).validate()
    }catch (error) {
      this.$message.warning('请正确填写表单')
    }
    if(result) {
      this.$store.dispatch('user/login' ,this.userInfo).then(() => {
        this.$message.success('登录成功')
        this.$router.push('/')
      })
    }
  }

}
</script>

<style scoped lang="scss">

.loginWrapper{
  width: 450px;
  margin: 100px auto auto;
  button{
    margin-top: 10px;
    margin-bottom: 42px;
  }
  .notice{
    text-align: center;
  }
}
</style>
