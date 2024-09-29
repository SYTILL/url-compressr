
export const URL_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const genRandomURL = (length = 5): string => {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * URL_CHARS.length);
        result += URL_CHARS[randomIndex];
    }
    return result;
}

export const BASE_URL = 'http://localhost:3000/'