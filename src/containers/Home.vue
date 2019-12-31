<template>
  <div class="home">
      <div class="left-tab">
          <Tab />
      </div>
      <div class="right-item">
        <SearchItem />
        <ListItem />
      </div>
      <div class="chat-item">
        <ChatItem />
      </div>
  </div>
</template>

<script>
import Tab from '@/components/tab';
import ListItem from '@/containers/ListItem'
import SearchItem from '@/containers/SearchItem'
import ChatItem from '@/containers/ChatItem'
export default {
    components: {
        Tab,
        ListItem,
        SearchItem,
        ChatItem
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