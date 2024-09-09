"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sendBtn = document.querySelector('#testBtn');
const timeBtn = document.querySelector('#timeBtn');
const testDiv = document.querySelector('#elm');
function sendRequest(endpoint_1) {
    return __awaiter(this, arguments, void 0, function* (endpoint, data = {}) {
        try {
            const response = yield fetch(`/api/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const result = yield response.json();
            testDiv.textContent = result.reply;
        }
        catch (error) {
            console.error('Error: ', error);
            testDiv.textContent = "エラーが発生しました。";
        }
    });
}
sendBtn === null || sendBtn === void 0 ? void 0 : sendBtn.addEventListener('click', () => sendRequest('message', { testMessage: 'API TEST' }));
timeBtn === null || timeBtn === void 0 ? void 0 : timeBtn.addEventListener('click', () => sendRequest('time'));
