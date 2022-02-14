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
      userName: '',
      gender: '',
      email: '',
      institution: '',
      position: '',
      school: '',
      major: '',
      degree: '',
      interest: ''
    }
  },
  methods: {
    onSubmit (formData) {
      console.log('submit', formData)
      // localStorage.userName = values.userName
      // localStorage.gender = values.gender
      // localStorage.email = values.email
      // localStorage.institution = values.institution
      // localStorage.position = values.position
      // localStorage.school = values.school
      // localStorage.major = values.major
      // localStorage.degree = values.degree
      // localStorage.interest = values.interest
      localStorage.setItem('userDetails', JSON.stringify(formData))
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
  mounted () {
    // if (localStorage.userName) {
    //   this.userName = localStorage.userName
    // }
    // if (localStorage.email) {
    //   this.email = localStorage.email
    // }
    // if (localStorage.institution) {
    //   this.institution = localStorage.institution
    // }
    // if (localStorage.position) {
    //   this.position = localStorage.position
    // }
    // if (localStorage.school) {
    //   this.school = localStorage.school
    // }
    // if (localStorage.major) {
    //   this.major = localStorage.major
    // }
    // if (localStorage.interest) {
    //   this.interest = localStorage.interest
    // }
    // if (localStorage.gender) {
    //   this.gender = localStorage.gender
    // }
    // if (localStorage.degree) {
    //   this.degree = localStorage.degree
    // }
    if (localStorage.getItem('userDetails')) {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      ({
        userName: this.userName,
        email: this.email,
        institution: this.institution,
        position: this.position,
        school: this.school,
        major: this.major,
        interest: this.interest,
        gender: this.gender,
        degree: this.degree
      } = userDetails)
      // this.userName = userDetails.userName
      // this.email = userDetails.email
      // this.institution = userDetails.institution
      // this.position = userDetails.position
      // this.school = userDetails.school
      // this.major = userDetails.major
      // this.interest = userDetails.interest
      // this.gender = userDetails.gender
      // this.degree = userDetails.degree
    }
  }
}
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group>
      <van-field v-model="userName" name="userName" label="姓名" placeholder="姓名" :rules="[{required: true, message: '请输入姓名！'}]"/>
      <van-field name="gender" label="性别">
        <template #input>
          <van-radio-group v-model="gender" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="email" name="email" label="邮箱" placeholder="邮箱" :rules="[{required: true, message: '请输入邮箱！'}, {pattern: /\S+@\S+\.\S+/, message: '请输入有效邮箱！'}]"/>
      <van-field v-model="institution" name="institution" label="单位" placeholder="单位" :rules="[{required: true, message: '请输入单位！'}]"/>
      <van-field v-model="position" name="position" label="职位" placeholder="职位" :rules="[{required: true, message: '请输入职位！'}]"/>
      <van-field v-model="school" name="school" label="毕业/在读院校" placeholder="毕业/在读院校" :rules="[{required: true, message: '请输入毕业/在读院校！'}]"/>
      <van-field v-model="major" name="major" label="专业" placeholder="专业" :rules="[{required: true, message: '请输入专业！'}]"/>
      <van-field name="degree" label="最高学历">
        <template #input>
          <van-radio-group v-model="degree" direction="horizontal">
            <van-radio name="博士/博士在读">博士/博士在读</van-radio>
            <van-radio name="硕士/硕士在读">硕士/硕士在读</van-radio>
            <van-radio name="本科/本科在读">本科/本科在读</van-radio>
            <van-radio name="本科以下">本科以下</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field v-model="interest" name="interest" label="感兴趣领域" placeholder="感兴趣领域" :rules="[{required: true, message: '请输入感兴趣领域！'}]"/>
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button color="pink" round block type="primary" native-type="submit">
        保存
      </van-button>
    </div>
  </van-form>
</template>
