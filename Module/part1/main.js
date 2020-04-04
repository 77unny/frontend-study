import { greetingMsg, message } from './app.js';
import { login, logout } from './userMessage.js';

document.querySelector('#user').innerHTML = greetingMsg('홍길동');
document.querySelector('#user2').innerHTML = message.greeting('홍길동');