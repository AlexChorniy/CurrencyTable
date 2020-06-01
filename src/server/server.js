import { CONSTANT } from './mock';

export const server = ({ curName }) => {
    const dataBase = CONSTANT?.data;
    const checkDB = dataBase[curName];
    if (checkDB) {
        const data = {
            valid: true,
            timestamp: Date.now(),
            base: curName,
            rates: checkDB?.rates
        };
        const newData = JSON.stringify(data);
        return { status: 200, data: newData };
    } else {
        return { status: 404, message: '404 not found' };
    }
};
