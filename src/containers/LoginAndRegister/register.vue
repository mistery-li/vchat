<template>
  <div>
    <span>用户名</span>
    <el-input placeholder="用户名" v-model="username" />
    <span>密码</span>
    <el-input placeholder="密码" v-model="password" show-password/>

    <el-button @click="handleLogin">注册</el-button>
  </div>
</template>

<script>
import getFriendId from '../../utils/getFriendId';
import { register, getLinkLastMessage } from '../../service'
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        async handleLogin() {
            const {username, password} = this;
            if(username.trim() === '') return;
            if(password === '') return;
            const user = await register(
                username,
                password
            )
            if(user) {
                // vuex 设置保存用户信息
                // vuex 设置关闭dialog
                window.localStorage.setItem('token', user.token)

                const linkmanIds = [
                    ...user.groups.map(group => group._id),
                    ...user.friends.map(friend => getFriendId(friend.from._id, friend.to._id))
                ]

                const linkmanMessages = await getLinkLastMessage(linkmanIds);
                // 分发消息
                console.log(linkmanMessages);
            }
        }
    }
}
</script>

<style>

</style>