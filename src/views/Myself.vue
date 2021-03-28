<template>
  <div class="myselfWrapper">
   <UserOrMyself :myself="true" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import UserOrMyself from '@/components/UserOrMyself'

@Component({
  components: {UserOrMyself}
})
export default class Myself extends Vue {

}
</script>

<style scoped lang="scss">
.myselfWrapper{
}
</style>
