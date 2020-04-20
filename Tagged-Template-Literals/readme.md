# Tagged Template Literals

ES6의 템플릿 문자열

`React`의 `css in js` 라이브러리인 `styled-componets` 에서 볼 수 있다.

```javascript
const Title = styled.h1`
	font-size: 1.5em;
	color: #666;
`
```

위와 같은 문법이다. 템프릿 리터럴 앞에 styled.h1이라는 객체의 속성



다른 예)

```javascript
const red = '빨간색';
const blue = '파랑색';

function favoriteColors(texts, ...values) {
	console.log(texts);
	console.log(values);
}

favoriteColors`제가 좋아하는 색은 ${red}와 ${blue}입니다.`
```

결과는??

```javascript
["제가 좋아하는 색은 ", "와 ", "입니다."]
["빨간색", "파랑색"]
```



favoriteColors`제가 좋아하는 색은 ${red}와 ${blue}입니다.` 

함수인데 괄호 대신 `(백틱)을 사용해 템플릿 문법을 사용했다.

texts 에는 분리된 문자열이 들어가게 된다.

마치 여기에다가 괄호를 쓴거 같이 호출해주지만 바로 파라미터로 들어가는게 아니고 여기에있는 값들이 

분리가 되고 따로 추출되서 해당값들을 사용 할수가 있다.



다른 예)

```javascript
const red = '빨간색';
const blue = '파랑색';

function favoriteColors(texts, ...values) {
	return texts.reduce(((result,text,i)=> `${result}${text}${values[i]?`<b>${values[i]}</b>` : ''}`),'')
}

favoriteColors`제가 좋아하는 색은 ${red}와 ${blue}입니다.`

//결과
"제가 좋아하는 색은 <b>빨간색</b>와 <b>파랑색</b>입니다."
```

