const sendBtn = document.querySelector('#testBtn') as HTMLElement;
const timeBtn = document.querySelector('#timeBtn') as HTMLElement;
const testDiv = document.querySelector('#elm') as HTMLElement;

async function sendRequest(endpoint: string, data: object = {}) {
    try {
        const response = await fetch(`/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        testDiv.textContent = result.reply;
    } catch (error) {
        console.error('Error: ', error);
        testDiv.textContent = "エラーが発生しました。";
    }
}

sendBtn?.addEventListener('click', () => sendRequest('message', { testMessage: 'API TEST' }));
timeBtn?.addEventListener('click', () => sendRequest('time'));