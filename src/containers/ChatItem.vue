<template>
    <div class="chat-wrap">
        <div v-if="chatType === 'user'">
            <UserChatItem />
        </div>
        <div v-else-if="chatType==='group'">
            <GroupChatItem group-id=""/>
        </div>
        <div v-else class="defaul-chat-item">
            <p>欢迎ヾ(=･ω･=)o</p>
            <p>欢迎来到vchat聊天室，选个聊天室聊天吧！</p>
        </div>
  </div>
</template>

<script>
import UserChatItem from '@/containers/UserChatItem'
import GroupChatItem from '@/containers/GroupChatItem'
export default {
    components: {
        UserChatItem,
        GroupChatItem
    },
    data() {
        return {
            chatType: 'group'
        }
    }

}
</script>

<style>
.defaul-chat-item {
    text-align: center;
    vertical-align:middle;
}
</style>