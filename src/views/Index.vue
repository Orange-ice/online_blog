<template>
<div>
  <section>
    <figure>
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
      <figcaption>方方</figcaption>
    </figure>
    <div class="content">
      <h3>前端异步大揭秘<span>3天前</span></h3>
      <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，
        包括 普通的 callback、ES2016中的Promise和Generator、
        Node 用于解决回调的co 模块、ES2017中的async/await。
        适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
    </div>
  </section>

  <section>
    <figure>
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
      <figcaption>方方</figcaption>
    </figure>
    <div class="content">
      <h3>前端异步大揭秘<span>3天前</span></h3>
      <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，
        包括 普通的 callback、ES2016中的Promise和Generator、
        Node 用于解决回调的co 模块、ES2017中的async/await。
        适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
    </div>
  </section>
</div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
@Component
export default class Index extends Vue {

}
</script>

<style scoped lang="scss">
section{
  margin: 32px 16px 0;
  display: flex;
  align-items: center;

  figure{
    font-size: 12px;
    text-align: center;
    margin: 0;
    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .content{
    p,h3{margin: 0;}
    margin-left: 16px;
    span{
      font-size: 12px;
      color: #999;
      margin-left: 20px;
    }
    p{
      margin-top: 8px;
    }
  }
}
</style>