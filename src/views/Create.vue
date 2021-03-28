<template>
  <div class="createWrapper">
   <CreateOrEdit />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import CreateOrEdit from '@/components/CreateOrEdit'


@Component({
  components: { CreateOrEdit }
})
export default class Create extends Vue {

}
</script>

<style scoped lang="scss">
.createWrapper{
}
</style>
