import fetch from './utils/io_fetch'

function saveUsername(username) {
    window.localStorage.setItem('username', username)

}
export async function login(username, password) {
    const [err, user] = await fetch('login', {
        username,
        password
    })
    if(err) {
        return null;
    }
    saveUsername(user.username)
    return user;
}

export async function register(username, password) {
    const [err, user] = await fetch('register', {
        username,
        password
    })
    if(err) {
        return null;
    }
    saveUsername(user.username)
    return user;
}

/**
 * 获取联系人的历史消息
 * @param linkmanIds 联系人id
 */
export async function getLinkLastMessage(linkmanIds) {
    const [, groupMessages] = await fetch(
        'getLinkmanLastMessages',
        {linkmanIds}
    )

    return groupMessages;
}

/**
 * 获取联系人历史消息
 * @param linkmanId 联系人id
 */
export async function getLinkmanHistoryMessages(linkmanId) {
    const [, messages] = await fetch(
        'getLinkmanHistoryMessages',
        {linkmanId}
    )
    return messages
}

export async function loginByToken(token) {
    const [, user] = await fetch(
        'loginByToken',
        { token }
    )

    return user;
}