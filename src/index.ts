const sendBtn = document.querySelector('#btn') as HTMLElement;
const testDiv = document.querySelector('#elm') as HTMLElement;

sendBtn?.addEventListener('click', async () => {
    console.log("click!!");
    try {
        const testMessage = 'API TEST';
        const response = await fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ testMessage })
        });
        const data = await response.json();
        testDiv.textContent = data.reply;
    } catch (error) {
        console.error('Error: ', error);
        testDiv.textContent = "エラーが発生しました。";
    }
});
