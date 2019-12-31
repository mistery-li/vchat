<template>
  <div class="tab">
      <UserAvatar name="litujin" :size="46"/>
      <div class="item">聊天列表</div>
      <div class="item">
        <i class="el-icon-setting setting"></i>
      </div>
  </div>
</template>

<script>
import UserAvatar from '@/components/UserAvatar'
export default {
  components: {
    UserAvatar
  }
}
</script>

<style>
.tab {
  background: #f3f3f3;
  padding: 0 10px;
}
.item {
  margin-top: 40px;
  text-align: center;
}
.setting {
  font-size: 40px;
}
</style>