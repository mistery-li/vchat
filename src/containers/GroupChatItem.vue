<template>
  <div>
    <ChatHead />
    <div class="chat-list">
        <ul>
            <li>
                <GroupAvatar name="liii" :size="36"/>
                <div class="group-base">
                    <span>liii</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
            <li>
                <GroupAvatar name="liii" :size="36"/>
                <div class="group-base">
                    <span>liii</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
            <li>
                <GroupAvatar name="liii" :size="36"/>
                <div class="group-base">
                    <span>liii</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
            <li>
                <GroupAvatar name="test" :size="36"/>
                <div class="group-base">
                    <span>test</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
            <li>
                <GroupAvatar name="测试" :size="36"/>
                <div class="group-base">
                    <span>测试</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
            <li>
                <GroupAvatar name="测试" :size="36"/>
                <div class="group-base">
                    <span>测试</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
            <li>
                <GroupAvatar name="测试" :size="36"/>
                <div class="group-base">
                    <span>测试</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
            <li>
                <GroupAvatar name="测试" :size="36"/>
                <div class="group-base">
                    <span>测试</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
            <li>
                <GroupAvatar name="测试" :size="36"/>
                <div class="group-base">
                    <span>测试</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
            <li>
                <GroupAvatar name="测试" :size="36"/>
                <div class="group-base">
                    <span>测试</span>
                    <span>昨天 11:30</span>
                </div>
                <div>恢复内容</div>
            </li>
        </ul>
    </div>
    <div class="chat-input-item">
        <el-button type="text">表情</el-button>
        <el-button type="text">文件</el-button>
        <el-input placeholder="支持Enter发送消息/粘贴发图/@别人"/>
        <el-button class="send-message" @click="sendMessage">发送</el-button>
    </div>
  </div>
</template>

<script>
import ChatHead from '@/containers/ChatHead'
import GroupAvatar from '@/components/GroupAvatar'
export default {
    components: {
        ChatHead,
        GroupAvatar
    }
}
</script>

<style>
.chat-input-item {
    background: #f3f3f3;
    width: 450px;
    padding: 5px;
    display: flex;
    align-content: flex-start;
    position: fixed;
    bottom: 20px;
}
.send-message {
    margin-left: 5px;
}
</style>