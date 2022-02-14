<script>
import {
  Image as VanImage
} from 'vant'

export default {
  data () {
    return {
      avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  },
  components: {
    [VanImage.name]: VanImage
  },
  mounted () {
    if (localStorage.avatar) {
      this.avatar = localStorage.avatar
    }
  },
  updated () {
    if (localStorage.avatar) {
      this.avatar = localStorage.avatar
    }
  }
}
</script>

<template>
  <header>
    <router-link to="/"><div id="home-link"><b>首页</b></div></router-link>
    <router-link to="/user"><van-image fit="cover" round width="2rem" height="2rem" :src="avatar"/></router-link>
  </header>
</template>
