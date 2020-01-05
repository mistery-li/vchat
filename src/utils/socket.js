import IO from 'socket.io-client'
import getFriendId from './getFriendId'
import { loginByToken, getLinkLastMessage,getLinkmanHistoryMessages } from '../service'

const socket = new IO('127.0.0.1');

// 未登陆用户获取机器人信息
async function getDefaultMessages() {

}
socket.on('connect', async () => {
    // vuex 分发 todo
    const token = window.localStorage.getItem('token');

    if(token) {
        const user = await loginByToken(token);
        if(user) {
            const linkIds = [
                ...user.groups.map(group => group._id),
                ...user.friends.map(friend => getFriendId(friend.from, friend.to._id))
            ]
            const linkMessages = await getLinkLastMessage(linkIds);
            console.log(linkMessages);
            // 分发消息
            return null;
        }
    }
    getDefaultMessages();
    return null;
});

socket.on('message', async (message) => {
    const state = {}; // 获取用户状态
    const isSelfMessage = message.from._id === state.user.id;
    if(isSelfMessage) {
        // 如果发送消息给自己
    }

    const linkman = {};  // 根据to属性获取发送目标信息
    if(linkman) {
        // vuex 分发消息
        console.log(444);
    } else {
        // 如果不存在联系人，并且是自己
        if(isSelfMessage) return;
        const newLinkman = {
            _id: getFriendId(1, 2),
            type: 'addNewLink',
            createTime: Date.now(),
            username: '',
            avatar: '',
            messages: [],
            unread: 1,
        }
        // vuex 分发  创建新联系人
        console.log(newLinkman);

        const messages = await getLinkmanHistoryMessages(newLinkman._id, 0);
        if(messages) {
            console.log(messages, 'vuex分发消息');
        }
    }
})

export default socket;