<template>
  <div>
    <span>聊天</span>
    <el-button size="mini">测试</el-button>
  </div>
</template>

<script>
// import {login} from "@/request/chatroom";

export default {
  name: "ChatRoom1",
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    this.userLogin()
  },
  methods: {
    userLogin() {
      let data = {}
      login(data).then(res => {
        console.log(res)
      })
    },
  }
}
</script>

<style scoped>

</style>