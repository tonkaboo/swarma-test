<script>
import {
  Button,
  CellGroup,
  Field,
  Form
} from 'vant'

export default {
  data () {
    return {
      phoneNo: '12345678910',
      timeRemained: '',
      disableBtn: false,
      valCode: '',
      password: '',
      verifyPsw: ''
    }
  },
  components: {
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Form.name]: Form
  },
  methods: {
    onSubmit (formData) {
      localStorage.password = formData.password
    },
    beginCountdown () {
      console.log('hello')
      this.disableBtn = true
      this.timeRemained = 10
      const numTimer = setInterval(() => this.timeRemained--, 1000)
      setTimeout(() => {
        clearInterval(numTimer)
        this.timeRemained = ''
        this.disableBtn = false
      }, 10 * 1000)
    },
    isSame () {
      return this.password === this.verifyPsw
    }
  },
  mounted () {
    console.log('Mounted')
    if (localStorage.phoneNo) {
      this.phoneNo = localStorage.phoneNo
    }
  },
  computed: {
    maskedPhoneNo () {
      const head = this.phoneNo.slice(0, 3)
      const tail = this.phoneNo.slice(7)
      return head + '****' + tail
    }
  }
}
</script>

<template>
  <van-form @submit="onSubmit">

  <van-cell-group>
    <van-field v-model="maskedPhoneNo" disabled="true" label="手机号码" />
    <van-field
      v-model="valCode"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
      :rules="[{required: true, message:'请输入验证码！'}, {pattern: /^\d{6}$/, message:'请输入6位验证码!'}]"
    >
      <template #button>
        <van-button size="small" round color="pink" type="primary" :disabled="disableBtn" @click="beginCountdown">发送 {{ timeRemained }}</van-button>
      </template>
    </van-field>
    <van-field v-model="password" type="password" name="password" label="新密码" placeholder="新密码" :rules="[{required: true, message: '请输入新密码！'}]"/>
    <van-field v-model="verifyPsw" type="password" label="确认新密码" placeholder="确认新密码" :rules="[{required: true, message: '请确认新密码！'},  {validator: isSame, message:'两次输入不一致！'}]"/>
  </van-cell-group>

    <div style="margin: 16px;">
      <van-button round color="pink" block type="primary" native-type="submit">
        保存
      </van-button>
    </div>
  </van-form>
</template>
