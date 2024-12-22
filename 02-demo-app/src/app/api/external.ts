'use server'

import axios from 'axios';

export const postToExternalApi = async (url: string, data: object) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('API呼び出しエラー:', error);
        throw error;
    }
};
