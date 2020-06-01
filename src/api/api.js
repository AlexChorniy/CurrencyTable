import { server } from '../server/server';

export function apiRequests(requestData) {
    return new Promise(function (resolve, reject) {
        const { status, data, message } = server(requestData)
        if (status === 200) {
            setTimeout(() => { resolve(data) }, 500);
        } else {
            setTimeout(() => { reject(new Error(message)) }, 750);
        }
    });
};
