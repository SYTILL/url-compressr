
export const URL_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
export const genRandomURL = (length = 5): string => {
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * URL_CHARS.length);
        result += URL_CHARS[randomIndex];
    }
    return result;
}

export const BASE_URL = process.env.NEXT_PUBLIC_CURRENT_URL!;

export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_MIN_LENGTH_ERROR = `Minimum length: ${PASSWORD_MIN_LENGTH}`;

export const PASSWORD_MAX_LENGTH = 10;
export const PASSWORD_MAX_LENGTH_ERROR = `Maximum length: ${PASSWORD_MAX_LENGTH}`;
