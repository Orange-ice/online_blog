<template>
  <div class="myselfWrapper">
    <div class="title">
      <img :src="user.avatar" alt="" class="avatar">
      <h3>{{user.username}}</h3>
    </div>

    <div class="container">
      <template v-if="blogs.length!==0">
        <div class="item" v-for="blog in blogs" :key="blog.id">
          <div class="date">
            <span class="day">{{new Date(blog.createdAt).getDate()}}</span>
            <span class="month">{{new Date(blog.createdAt).getMonth() + 1}}月</span>
            <span class="year">{{new Date(blog.createdAt).getFullYear()}}</span>
          </div>
          <div class="content" @click="$router.push(`/detail/${blog.id}`)">
            <h3>{{blog.title}}</h3>
            <p>{{blog.description}}</p>
            <div v-if="myself" class="actions">
              <router-link :to="`/edit/${blog.id}`">编辑</router-link>
              <a href="#" @click="askDelete(blog.id)">删除</a>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="no-blog">
          {{myself?'呀！您还未发布过文章。':'该用户暂未发布过文章。'}}
        </div>
      </template>
      <!-- 询问删除对话框 -->
      <a-modal
          v-model="visible"
          title="提示"
          @ok="handleOk"
          ok-text="确认"
          cancel-text="取消"
      >
        <p>确定要删除该博客吗？</p>
        <p>注：一旦删除不可撤销</p>
      </a-modal>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component, Prop} from 'vue-property-decorator';
import {getUserBlogs} from '@/api/auth';
import {Getter} from 'vuex-class';
import {deleteBlog} from '@/api/blog';

@Component
export default class Myself extends Vue {
  @Prop(Boolean) readonly myself!: false
  @Getter id!: string
  get userId() {
    return this.$route.params.id
  }
  user = {
    username: '',
    avatar: ''
  }
  visible = false
  currentDeleteId = ''
  blogs: BlogItem[] = []
  created() {
    this.fetchBlogs()
  }
  fetchBlogs() {
    const id = this.myself ? this.id : this.userId
    getUserBlogs(id).then(response => {
      const resource = response.data
      this.user = resource.user
      this.blogs = resource.blogs
      console.log(this.blogs.length);
    })
  }
  askDelete(id: string) {
    this.currentDeleteId = id
    this.visible = true
  }
  handleOk() {
    deleteBlog(this.currentDeleteId).then(() => {
      this.visible = false
      this.$message.success('删除成功')
      this.fetchBlogs()
    })
  }
}
</script>

<style scoped lang="scss">
.myselfWrapper{
  margin: 0 150px;
  .title{
    display: flex;
    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: solid 1px #ebebeb;
    .avatar{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    h3{
      margin-top: 10px;
      margin-left: 16px;
    }
  }
  .container{
    height: 75vh;
    overflow: auto;
  }
  .item{
    margin: 20px 0;
    display: flex;
    .date{
      //border: solid 1px red;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      .day{
        font-size: 40px;
        line-height: 40px;
      }
    }
    .content{
      cursor: pointer;
      margin-left: 16px;
      h3{margin: 0;}
      p{margin: 8px 0 0;}
      .actions{
        a{margin-right: 16px}
      }
    }
  }
  .no-blog{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    font-size: 18px;
    color: #aaa;
  }
}
</style>
