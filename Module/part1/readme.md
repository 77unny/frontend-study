# Module : part1

모듈은 순수 자바스크립트에서 사용할 수 없다.

호스트 환경에서 사용 가능하다.

liveserver를 이용하거나, node서버를 이용하거나 다른 호스트 환경을 사용해야한다.



### 브라우저에서의 Module

```html
<script type="module" src="main.js"></script>
```

`type="module"` 을 붙여서 사용한다.

`app.js`에서 `console.log()` 를 찍어 보았다. 결과는 console.log() 가 실행 된다.

`main.js`에서 `import { greetingMsg, message } from './app.js';`  app.js 를 불러왔지만 app.js 의 전역공간에서 실행 된 console.log는 export로 내보내지 않아도 실행이 된것이다.

불러올 파일에서 내부적으로 실행된 파일은 실행이 된다. 사용을 할 수 없는 것 뿐

내부적으로 실행 되는 것은 안좋은 프로그래밍이라고 생각 든다. 왜? 찾기도 힘들고, 실행을 담당하는 파일에서 실행을 하게된다면 좀 더 가독성과 수정을 하기 쉬운 코드가 되지 않을까??

 