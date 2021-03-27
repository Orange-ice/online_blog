<template>
<div>
  <header>
    <a-input-search placeholder="输入标题筛选" style="width: 200px" @search="onSearch" />
  </header>
  <div class="blog-wrapper">
    <section>
      <figure>
        <img src="https://ui-avatars.com/api/?background=random&name=Burt" alt="">
        <figcaption>方方</figcaption>
      </figure>
      <div class="content">
        <h3>前端异步大揭秘<span>3天前</span></h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，
          包括 普通的 callback、ES2016中的Promise和Generator、
          Node 用于解决回调的co 模块、ES2017中的async/await。
          适合初步接触 Node.js以及少量 ES6语法的同学阅读...
          本文以一个简单的文件读写为例，讲解了异步的不同写法，
          包括 普通的 callback、ES2016中的Promise和Generator、
        </p>
      </div>
    </section>
  </div>
  <div class="pagination-wrapper">
    <a-pagination size="small" :total="50" :show-total="total => `共 ${total} 篇 `" />
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
@Component
export default class Index extends Vue {
  onSearch() {
    console.log('1');
  }
}
</script>

<style scoped lang="scss">
header{
  margin: 16px 80px 0;
  padding-bottom: 16px;
  border-bottom: solid 1px #ccc;
}
.blog-wrapper{
  height: 75vh;
  overflow: auto;
}
section{
  margin: 32px 80px 0;
  display: flex;
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
.pagination-wrapper{
  border-top: solid 1px #ccc;
  padding: 24px 0 8px;
  margin: 0 80px;
}
</style>
