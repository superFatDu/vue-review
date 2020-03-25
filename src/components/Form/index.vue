<template>
  <div>
    <!-- <ccx-input v-model="account" placeholder="account" />
    <ccx-input type="password" v-model="passwd" placeholder="password" /> -->
    <!-- {{account}}
    <ccx-form-item label="账号">
      <ccx-input v-model="account" placeholder="account" />
    </ccx-form-item>
    <ccx-form-item label="密码">
      <ccx-input type="password" v-model="passwd" placeholder="password" />
    </ccx-form-item> -->
  </div>
</template>

<script>
import CcxInput from './Input.vue'
import CcxFormItem from './FormItem.vue'
export default {
  name: 'Form',
  components: {
    CcxInput,
    CcxFormItem
  },
  data () {
    return {
      account: '',
      passwd: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
