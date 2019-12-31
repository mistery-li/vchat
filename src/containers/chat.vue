<template>
  <div>
      <ChatList />
      <ChatBox />
  </div>
</template>

<script>
import ChatList from '@/containers/Chat/chatList'
import ChatBox from '@/containers/Chat/chatBox'
export default {
    components: {
        ChatList,
        ChatBox
    }
}
</script>

<style>

</style>