<template>
  <el-dialog
  :visible.sync="userInfoDialog"
  :show-close="false"
  width="30%"
  >
  <div>
    <UserAvatar :name="user.username" :size="46"/>
    <div>{{ user.username }}111</div>
  </div>
  </el-dialog>
</template>

<script>
import UserAvatar from '@/components/UserAvatar'
export default {
  components: {
    UserAvatar
  },
  created() {
    this.$store.dispatch('openUserInfoDialog', true)
  },
  data() {
    return {
      userInfoDialog: this.$store.getters.getShowInfoDialog,
      user: this.$store.getters.getUserInfo
    }
  }
}
</script>

<style>

</style>