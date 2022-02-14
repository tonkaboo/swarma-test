<script>
import {
  Button,
  Cell,
  CellGroup,
  Image as VanImage
} from 'vant'

export default {
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [VanImage.name]: VanImage
  },
  data () {
    return {
      nickname: '用户未登录',
      intro: '这个人很懒...',
      likes: '800',
      views: '8000',
      followers: '80',
      avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  },
  mounted () {
    if (localStorage.nickname) {
      this.nickname = localStorage.nickname
    }
    if (localStorage.intro) {
      this.intro = localStorage.intro
    }
    if (localStorage.avatar) {
      this.avatar = localStorage.avatar
    }
  },
  // updated () {
  //   if (localStorage.nickname) {
  //     this.nickname = localStorage.nickname
  //   }
  //   if (localStorage.intro) {
  //     this.intro = localStorage.intro
  //   }
  //   if (localStorage.avatar) {
  //     this.avatar = localStorage.avatar
  //     this.$emit('timeToChange')
  //   }
  // },
  emits: ['timeToChange'],
  methods: {
    setInfo () {
      if (localStorage.nickname) {
        this.nickname = localStorage.nickname
      }
      if (localStorage.intro) {
        this.intro = localStorage.intro
      }
      if (localStorage.avatar) {
        this.avatar = localStorage.avatar
        this.$emit('timeToChange')
      }
    }
  }
}

</script>

<template>
  <div id="user-page">
    <div id="user-header">
        <div id="user-header-info">
            <div id="user-header-avatar">
                <!-- <img src="../assets/logo.png" style="width: 100px;"> -->
                <van-image fit="cover" round width="8rem" height="8rem" :src="avatar"/>
            </div>
            <div id="user-header-basic">
                <h1>{{ this.nickname }}</h1>
                <p><b>个人简介 </b>{{ this.intro }}</p>
            </div>
        </div>
        <div id="user-header-social">
            <p><b>收获点赞 </b>{{ this.likes }}</p>
            <p><b>路径被阅读 </b>{{ this.views }}</p>
            <p><b>关注者 </b>{{ this.followers }}</p>
        </div>
    </div>

    <!--
    <div id="user-config-links" v-if="this.$route.path === '/user'">
        <router-link to="/user/info">修改基本信息</router-link> |
        <router-link to="/user/detail">修改详细信息</router-link> |
        <router-link to="/user/change_phone">修改手机号</router-link> |
        <router-link to="/user/change_password">修改密码</router-link>
    </div>
    -->

    <van-cell-group id="user-config-links" v-if="this.$route.path === '/user'">
        <router-link to="/user/info"><van-cell title="修改基本信息" is-link /></router-link>
        <router-link to="/user/detail"><van-cell title="修改详细信息" is-link /></router-link>
        <router-link to="/user/change_phone"><van-cell title="修改手机号" is-link /></router-link>
        <router-link to="/user/change_password"><van-cell title="修改密码" is-link /></router-link>
    </van-cell-group>

    <router-view @updateInfo="setInfo"/>
  </div>
</template>

<style scoped>
b {
  font-size: 1.1em;
}

#user-header {
    background-color: teal;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
}
#user-header-info {
    display: flex;
    justify-content: space-between;
}
#user-header-social {
    display: flex;
    justify-content: space-between;
}
</style>
