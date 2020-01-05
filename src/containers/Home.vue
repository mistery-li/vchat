<template>
  <div class="home">
      <loginAndRegister />
      <UserInfo />
  </div>
</template>

<script>
import loginAndRegister from './LoginAndRegister/loginAndRegister'
import UserInfo from './UserInfo'
export default {
    components: {
        loginAndRegister,
        UserInfo
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
    display: flex;
    align-content: flex-start;
    border: 1px solid #fefefe;
}
</style>