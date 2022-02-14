<script>
import {
  Button,
  CellGroup,
  Field,
  Form,
  Radio,
  RadioGroup,
  Uploader,
  Toast
} from 'vant'

export default {
  data () {
    return {
      nickname: '',
      intro: '',
      avatar: []
    }
  },
  components: {
    [Button.name]: Button,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Form.name]: Form,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    [Uploader.name]: Uploader,
    [Toast.name]: Toast
  },
  methods: {
    onSubmit (formData) {
      console.log(this.avatar[0])
      localStorage.nickname = formData.nickname
      localStorage.intro = formData.intro
      localStorage.avatar = formData.avatar[0].content
      this.$emit('updateInfo')
      // const imgData = this.getBase64Image(formData.avatar)
      // localStorage.avatar = imgData
    },
    onOversize () {
      Toast('图像大小不得超过2MB！')
    }
    // getBase64Image (img) {
    //   const canvas = document.createElement('canvas')
    //   canvas.width = img.width
    //   canvas.height = img.height
    //   const ctx = canvas.getContext('2d')
    //   ctx.drawImage(img, 0, 0)
    //   const dataURL = canvas.toDataURL('image/png')
    //   return dataURL.replace(/^data:image\/(png|jpg);base64,/, '')
    // }
  },
  mounted () {
    if (localStorage.nickname) {
      this.nickname = localStorage.nickname
    }
    if (localStorage.intro) {
      this.intro = localStorage.intro
    }
  },
  emits: ['updateInfo']
}

</script>
<template>
  <van-form @submit="onSubmit">
    <van-cell-group>
      <van-field v-model="nickname" name="nickname" label="昵称" placeholder="昵称" :rules="[{required: true, message: '请输入昵称！'}]"/>
      <van-field v-model="intro" name="intro" label="简介" placeholder="简介" :rules="[{required: true, message: '请输入简介！'}]"/>
      <van-field name="avatar" label="图片上传">
        <template #input>
            <van-uploader v-model="avatar" result-type="dataUrl" max-count="1" :max-size="2*1024*1024" @oversize="onOversize"/>
        </template>
      </van-field>

    </van-cell-group>
    <div style="margin: 16px;">
      <van-button color="pink" round block type="primary" native-type="submit">
        保存
      </van-button>
    </div>
  </van-form>
</template>
