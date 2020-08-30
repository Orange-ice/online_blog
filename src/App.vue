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