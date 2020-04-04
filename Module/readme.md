# JavaScript Module

> 자바스크립트의 모듈(module) 정리



**Module이란?**
프로그램을 구성하는 하나의 부품, 레고의 블럭 개념

- 재사용성이 용이하다.
- 수정시 빠르게 찾아 수정을 할 수 있다.
- 필요한 로직만 로드해서 메모리 낭비를 줄일 수 있다.
- 모듈은 웹브라우져에 저장되기 때문에 클라이언트 입장에서 비용이 절약이 된다.

그렇다면 **라이브러리**와 **모듈**이랑 무슨관계?
라이브러리는 여러기능들을 담아둔 하나의 큰 모듈이라 정의 내릴 것 같다.

<u>우리는 기존에도 모듈패턴의 프로그래밍을 했었다.</u> 
기존의 모듈방식의 자바스크립트 프로그래밍

```html
<script src="jquery.min.js"></script>
<script src="common.js"></script>
<script src="main.js"></script>
<script src="sub.js"></script>
```



자바스크립트에서 구동되는 환경에서 (호스트 환경) 모듈을 사용할 수 있다.

- ES6 Modules => `import` / `export`
- Common JS  / Node JS => `require` / `module.exports`
- AMD => `requrie`
- 브라우저 => `<script type="module" src="app.js></script>"`

[ 자바스크립트 모듈 시스템 참고 블로그 ](https://velog.io/@doondoony/JavaScript-Module-System)

