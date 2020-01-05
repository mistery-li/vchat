<template>
  <div class="chat-input">
      <p v-if="!isLogin">游客朋友你好,请<el-button type="text" style="font-size: 20px;">登录</el-button>后参与聊天</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isLogin: this.$store.state.isLogin
        }
    }
}
</script>

<style>
.chat-input {
    text-align: center;
    background:  #79d2a6;
    width: 65%;
    border: 1px solid #f3f3f3;
    border-radius: 1%;
    position: fixed;
    bottom: 0px;
    left: 35%;
}
</style>