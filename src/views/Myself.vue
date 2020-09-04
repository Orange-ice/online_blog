<template>
  <div class="myselfWrapper">
    <div class="title">
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="" class="avatar">
      <h3>方方</h3>
    </div>

    <div class="container">
      <div class="item">
        <div class="date">
          <span class="day">4</span>
          <span class="month">9月</span>
          <span class="year">2020</span>
        </div>
        <div class="content">
          <h3>前端异步解密</h3>
          <p>
            本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的
            callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模
            块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的
            同学阅读...
          </p>
          <div class="actions">
            <router-link to="/edit">编辑</router-link>
            <a href="#">删除</a>
          </div>
        </div>
      </div>
    </div>

    <div class="item">
      <div class="date">
        <span class="day">4</span>
        <span class="month">9月</span>
        <span class="year">2020</span>
      </div>
      <div class="content">
        <h3>前端异步解密</h3>
        <p>
          本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的
          callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模
          块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的
          同学阅读...
        </p>
        <div class="actions">
          <router-link to="/edit">编辑</router-link>
          <a href="#">删除</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
@Component
export default class Myself extends Vue {

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
      margin-left: 16px;
      h3{margin: 0;}
      p{margin: 8px 0 0;}
      .actions{
        a{margin-right: 16px}
      }
    }
  }
}
</style>