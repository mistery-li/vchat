import { Message } from 'element-ui';
import socket from './socket';

export default function io_fetch(event, data) {
    return new Promise((resolve) => {
        socket.emit(event, data, (res) => {
            if(typeof res === 'string') {
                Message.error(res);
                resolve([res, null])
            } else {
                resolve([null, res]);
            }
        })
    })
}