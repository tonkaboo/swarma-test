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
  methods: {
    setAvatar () {
      this.avatar = localStorage.avatar
    }
  }
}
</script>

<template>
  <header>
    <router-link to="/"><div id="home-link"><b>首页</b></div></router-link>
    <router-link to="/user"><van-image fit="cover" round width="2rem" height="2rem" :src="avatar"/></router-link>
    <!-- <router-link><van-image fit="cover" round width="2rem" height="2rem" src="./assets/logo.png"/></router-link> -->
  </header>
  <router-view @timeToChange="setAvatar"/>
</template>

<style>
header {
  background: pink;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 40px;
}

header a {
  color: white;
  font-size: larger;
  text-decoration: none;
  padding: 5px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
