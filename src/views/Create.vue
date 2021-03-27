<template>
  <div class="createWrapper">
    <h1>创建文章</h1>
    <a-form-model ref="form" :colon="false" :model="blog" :rules="rules">
      <a-form-model-item label="文章标题" prop="title">
        <a-input v-model="blog.title" />
      </a-form-model-item>
      <a-form-model-item label="内容简介" prop="description">
        <a-textarea
          v-model="blog.description"
          :auto-size="{ minRows: 2, maxRows: 6 }"
        />
      </a-form-model-item>
      <a-form-model-item label="文章内容" prop="content">
        <a-textarea
            v-model="blog.content"
          :auto-size="{ minRows: 8, maxRows: 20 }"
        />
      </a-form-model-item>
    </a-form-model>
    <a-button type="primary" @click="submit">立即创建</a-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {createBlog} from '@/api/blog';

@Component
export default class Create extends Vue {
  blog = {
    title: '',
    description: '',
    content: ''
  }
  rules = {
    title: [
      { required: true, message: '请输入文章标题', trigger: 'blur' },
      { min: 6, max: 16, message: '长度为 6~16', trigger: 'blur' },
    ],
    description: [
      { required: true, message: '请输入内容简介', trigger: 'blur' },
      { min: 10, max: 50, message: '长度为 10~50', trigger: 'blur' },
    ],
    content: [
      { required: true, message: '请输入文章内容', trigger: 'blur' },
      { min: 100, message: '长度最少为 200', trigger: 'blur' },
    ]
  }
  async submit() {
    let result
    try{
      result = await (this.$refs.form as Vue & { validate: () => boolean }).validate()
    }catch (error) {
      this.$message.warning('请正确填写表单')
    }
    if(result) {
      createBlog(this.blog).then(response => {
        console.log(response);
        this.$router.replace('/')
      })
    }
  }
}
</script>

<style scoped lang="scss">
.createWrapper{
  h1{text-align: center;margin-top: 16px;}
  margin: 0 150px;
}
</style>
