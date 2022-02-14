<script>
import {
  Button,
  CellGroup,
  Field,
  Form,
  Radio,
  RadioGroup
} from 'vant'

export default {
  data () {
    return {
      phoneNo: '12345678910',
      newPhoneNo: '',
      timeRemainedOld: '',
      timeRemainedNew: '',
      disableBtnOld: false,
      disableBtnNew: false,
      valCodeOld: '',
      valCodeNew: '',
      isTrue: true
    }
  },
  components: {
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Form.name]: Form,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup
  },
  methods: {
    onSubmit (formData) {
      localStorage.phoneNo = formData.newPhoneNo
    },
    // beginCountdown () {
    //   this.disableBtn = true
    //   this.timeRemained = 60
    //   setInterval(() => this.timeRemained--, 1000)
    // }
    // beginCountdown () {
    //   this.disableBtn = true
    //   this.timeRemained = 10
    //   console.log(this.timeRemained)
    //   const timer = setInterval(countingDown, 1000)
    //   function countingDown () {
    //     if (this.timeRemained === 0) {
    //       clearInterval(timer)
    //     } else {
    //       this.timeRemained--
    //       console.log(this.timeRemained)
    //     }
    //   }
    // }
    beginCountdownOld () {
      this.disableBtnOld = true
      this.timeRemainedOld = 10
      const numTimer = setInterval(() => this.timeRemainedOld--, 1000)
      setTimeout(() => {
        clearInterval(numTimer)
        this.timeRemainedOld = ''
        this.disableBtnOld = false
      }, 10 * 1000)
    },
    beginCountdownNew () {
      this.disableBtnNew = true
      this.timeRemainedNew = 10
      const numTimer = setInterval(() => this.timeRemainedNew--, 1000)
      setTimeout(() => {
        clearInterval(numTimer)
        this.timeRemainedNew = ''
        this.disableBtnNew = false
      }, 10 * 1000)
    },
    isDifferent () {
      return this.phoneNo !== this.newPhoneNo
    }
    // argTry (event) {
    //   console.log((event.target).id)
    // }
  },
  mounted () {
    if (localStorage.phoneNo) {
      // this.hasPhoneNo = true
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
    <van-field
      v-model="maskedPhoneNo"
      disabled="true"
      label="当前手机号码"
    />

    <van-field
      v-model="valCodeOld"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
      :rules="[{required: true, message:'请输入验证码！'}, {pattern: /^\d{6}$/, message:'请输入6位验证码!'}]"
    >
      <template #button>
        <van-button size="small" round color="pink" type="primary" :disabled="disableBtnOld" @click="beginCountdownOld">发送 {{ timeRemainedOld }}</van-button>
      </template>
    </van-field>

    <van-field
      v-model="newPhoneNo"
      name="newPhoneNo"
      label="新手机号码"
      placeholder="新手机号码"
      :rules="[{required: true, message: '请输入新手机号码！'}, {pattern: /^1\d{10}$/, message:'请输入有效手机号!'}, {validator: isDifferent, message:'请勿输入原手机号！'}]"
    />

    <van-field
      v-model="valCodeNew"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
      :rules="[{required: true, message:'请输入验证码！'}, {pattern: /^\d{6}$/, message:'请输入6位验证码!'}]"
    >
      <template #button>
        <van-button size="small" round color="pink" type="primary" :disabled="disableBtnNew" @click="beginCountdownNew">发送 {{ timeRemainedNew }}</van-button>
      </template>
    </van-field>

  </van-cell-group>

    <div style="margin: 16px;">
      <van-button round color="pink" block type="primary" native-type="submit">
        保存
      </van-button>
    </div>
  </van-form>

  <!-- <van-button id="btn1" round type="primary" @click="argTry(this.id)">试一试</van-button> -->
</template>
