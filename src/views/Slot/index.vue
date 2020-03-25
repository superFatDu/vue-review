<template>
  <div>
    <slot-child>
       <!-- 匿名插槽 -->
      <p>这是匿名插槽</p>
      <!-- 具名插槽 -->
      <template v-slot:child>
        <p>这是具名插槽</p>
      </template>
      <!-- 作用域插槽 -->
      <template v-slot:content="{ scopes }">
        <p>这是作用域插槽</p>
        {{ scopes.name }}
      </template>
    </slot-child>
  </div>
</template>

<script>
import SlotChild from './SlotChild.vue'
export default {
  name: 'Slots',
  components: {
    SlotChild
  }
}
</script>

<style lang="scss" scoped>

</style>
