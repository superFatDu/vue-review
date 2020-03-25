<template>
  <div class="home">
    <ccx-form :model="model" :rules="rules" ref="ccxForm">
      <ccx-form-item label="用户名" prop="username">
        <ccx-input v-model="model.username" placeholder="username" />
      </ccx-form-item>
      <ccx-form-item label="密码" prop="password">
        <ccx-input v-model="model.password" placeholder="password" type="password" />
      </ccx-form-item>
      <ccx-form-item>
        <button @click="handleLogin">登录</button>
      </ccx-form-item>
    </ccx-form>
  </div>
</template>

<script>
// @ is an alias to /src
import CcxForm from '@/components/Form/Form.vue'
import CcxFormItem from '@/components/Form/FormItem.vue'
import CcxInput from '@/components/Form/Input.vue'

export default {
  name: 'Form',
  components: {
    CcxForm,
    CcxFormItem,
    CcxInput
  },
  data () {
    return {
      model: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请填写用户名' }],
        password: [{ required: true, message: '请填写密码' }]
      }
    }
  },
  methods: {
    handleLogin () {
      this.$refs.ccxForm.validate((isValid) => {
        isValid ? console.log('success') : console.log('fail')
      })
    }
  }
}
</script>
