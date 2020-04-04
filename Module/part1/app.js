console.log('app.js 전역공간');
const foo = () => '테스트용 함수';
const greetingMsg = (name) => `${name}님 안녕하세요.`;

const message = {
  greeting(name) {
    return `${name}님 안녕하세요. 반갑습니다.`;
  },
};
export { greetingMsg, message };
