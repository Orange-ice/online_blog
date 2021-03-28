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
    <a-button v-if="loginStatus" type="primary" @click="login">立即登录</a-button>
    <a-button v-else type="primary" @click="register">立即注册</a-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component, Prop} from 'vue-property-decorator';
import {register} from '@/api/auth';

@Component
export default class Login extends Vue {
  @Prop(Boolean) readonly loginStatus!: false
  userInfo = {
    username: '',
    password: ''
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
  created() {
    if (this.loginStatus) {
      this.userInfo.username = 'Burt'
      this.userInfo.password = '123456'
    }
  }
  async validateForm() {
    let result
    try{
      result = await (this.$refs.form as Vue & { validate: () => boolean }).validate()
    }catch (error) {
      this.$message.warning('请正确填写表单')
    }
    return result
  }
  async login() {
    const result = await this.validateForm()
    if(result) {
      this.$store.dispatch('user/login' ,this.userInfo).then(() => {
        this.$message.success('登录成功')
        this.$router.push('/')
      })
    }
  }
  async register() {
    const result = await this.validateForm()
    if (result) {
      register(this.userInfo).then(response => {
        console.log(response);
        this.$message.success('注册成功')
        this.$router.push('/login')
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
}
</style>
