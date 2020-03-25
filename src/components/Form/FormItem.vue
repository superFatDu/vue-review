<template>
  <div>
    <label v-if="label">
      {{label}}
    </label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'FormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      errorMessage: ''
    }
  },
  methods: {
    validate () {
      // 获取校验规则
      const rules = this.form.rules[this.prop]
      // 获取值
      const value = this.form.model[this.prop]
      // async-validator
      const desc = {
        [this.prop]: rules
      }
      console.log(desc)
      const schema = new Schema(desc)
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
