'use client';

import React, { useState } from 'react';
import { postToExternalApi } from './external';

export default function ExternalApiPage() {
    const [response, setResponse] = useState<string | null>(null);

    const handleApiCall = async () => {
        const url = 'https://your-api-endpoint.com/data';
        const data = { message: 'Hello, API!' };

        try {
            const apiResponse = await postToExternalApi(url, data);
            setResponse(JSON.stringify(apiResponse));
        } catch (err) {
            console.error(err);
            alert('API呼び出しに失敗しました');
        }
    };

    return (
            <div>
                <h1>外部APIの呼び出し</h1>
                <button onClick={handleApiCall}>API実行</button>
                {response && <p>APIレスポンス: {response}</p>}
            </div>
    );
}
