<template>
  <div class="editWrapper">
    <CreateOrEdit :edit-able="true" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component} from 'vue-property-decorator';
import CreateOrEdit from '@/components/CreateOrEdit'

@Component({
  components: { CreateOrEdit }
})
export default class Edit extends Vue {

}
</script>

<style scoped lang="scss">
.editWrapper{
}
</style>
