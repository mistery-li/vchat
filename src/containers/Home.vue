<template>
  <div class="home">
      <div class="chat-box">
        <Sidebar />
        <UserAndLinkmanList />
        <Chat />
      </div>
      <loginAndRegister />
      <UserInfo />
  </div>
</template>

<script>
import Chat from './Chat/Chat'
import Sidebar from './Sidebar/Sidebar'
import UserAndLinkmanList from './UserAndGroupBar/UserAndLinkmanList'
import loginAndRegister from './LoginAndRegister/loginAndRegister'
import UserInfo from './UserInfo'
export default {
    components: {
        loginAndRegister,
        UserInfo,
        Chat,
        Sidebar,
        UserAndLinkmanList
    },
    data() {
        return {
            dataList: [],
        }
    }
}
</script>

<style>
.home {
    height: 900px;
    background-image: url("http://www.yjpoo.com/images/201907/goods_img/22459_g_1564500160946.jpg"); background-size: 1920px 1080px; background-repeat: no-repeat;
}
.chat-box {
    display: flex;
    background: #fff;
    border: 1px solid #f3f3f3;
    border-radius: 1%;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 90%;
    -webkit-transform: translateX(-50%) translateY(-50%); 
}
</style>