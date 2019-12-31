<template>
    <ul class="list-item-wrap">
    <li class="item">
        <UserAvatar :name="name" :size="size"></UserAvatar>
        <div class="content">
            <span class="title robotTitle">机器人小V</span>
        </div>
    </li>
    <!-- 用户聊天列表 -->
    <!-- 区分群组，用户私聊 -->
    <li class="item">
        <UserAvatar :name="name" :size="size"></UserAvatar>
        <div class="content">
            <span class="title robotTitle">机器人小V</span>
        </div>
        <span class="time">19:09</span>
    </li>
    </ul>
</template>

<script>
import UserAvatar from '@/components/UserAvatar'
export default {
    components: {
        UserAvatar
    },
    data() {
        return {
            name: "机器人小V",
            size: 46
        }
    }
}
</script>

<style>
.list-item-wrap {
    border-top: 1px solid #f3f3f3;
    border-left: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
    width: 250px;
    margin-top: -5px;
    padding-left: 0;
}
li {
    list-style: none;
}
.item {
    display: flex;
    align-content: flex-start;
    margin: 10px;
}
.time {
    position: relative;
    left: 50px;
}
</style>