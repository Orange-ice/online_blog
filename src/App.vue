<template>
  <div class="wrapper">
    <Header/>
    <div class="main">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Vue from "vue";
import {Component} from 'vue-property-decorator';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
@Component({
  components: {Footer, Header}
})
export default class App extends Vue {
  created() {
    // 在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
    }
    // 在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";

html,body,.wrapper{
  height: 100%;
}

.wrapper{
  display: flex;
  flex-direction: column;
  .main{
    flex-grow: 1;
  }
}
</style>
