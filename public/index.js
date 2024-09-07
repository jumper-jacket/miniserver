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
const sendBtn = document.querySelector('#btn');
const testDiv = document.querySelector('#elm');
sendBtn === null || sendBtn === void 0 ? void 0 : sendBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("click!!");
    try {
        const testMessage = 'API TEST';
        const response = yield fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ testMessage })
        });
        const data = yield response.json();
        testDiv.textContent = data.reply;
    }
    catch (error) {
        console.error('Error: ', error);
        testDiv.textContent = "エラーが発生しました。";
    }
}));
