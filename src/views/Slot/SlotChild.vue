<template>
  <div>
    <!-- 匿名插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <slot name="child"></slot>
    <!-- 作用域插槽 -->
    <slot name="content" :scopes="scopes"></slot>
  </div>
</template>

<script>
export default {
  name: 'SlotChild',
  data () {
    return {
      scopes: {
        name: 'cHeNg5',
        age: 27
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
