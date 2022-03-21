<template>
  <child-item>
      <template #content>
          <span class="contentSpan">content span</span>
      </template>
  </child-item>
</template>

<script>
import ChildItem from './ChildItem.vue'
export default {
  components: { ChildItem },

}
</script>

<style>

</style>