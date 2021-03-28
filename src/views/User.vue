<template>
<div class="userWrapper">
 <UserOrMyself :myself="false" />
</div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import UserOrMyself from '@/components/UserOrMyself.vue'
@Component({
  components: {UserOrMyself}
})
export default class User extends Vue {

}
</script>

<style scoped lang="scss">
.userWrapper{
}
</style>
