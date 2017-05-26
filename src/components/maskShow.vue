<template>
  <div class="mask" :class="{ 'hide': isHideMask }"></div>
</template>
<script>
/* eslint-disable */
import { mapGetters, mapActions }  from 'vuex'
export default {
  computed:mapGetters([
  	'isHideMask'
  ]),
  methods:mapActions([
  ])
}
</script>
<style lang="less">
</style>

