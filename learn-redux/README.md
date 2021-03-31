## Redux

### 1. 리덕스에서 사용되는 키워드 숙지하기

#### 액션 (Action)

- 상태에서 어떤 변화가 필요하게 될 때, 액션을 발생시킴.
  이는, 하나의 객체로 표현됨

```javascript
{
  type: 'TOGGLE_VALUE'
}
```

- 액션 객체는 `type` 필드를 필수적으로 가지고 있어야하고, 그 외의 값들은 개발자가 마음대로 넣어줄 수 있음.

```javascript
{
  type: "ADD_TODO",
  data: {
    id: 0,
    text: "learning Redux"
  }
}
```

```javascript
{
  type: "CHANGE_INPUT",
  text: "안녕하세요"
}
```

#### 액션 생성함수

- 액션 생성함수는, 액션을 만드는 함수, 단순히 파라매터를 받아와서 액션 객체 형태로 만듦

```javascript
export function addTodo(data) {
  return {
    type: 'ADD_TODO',
    data,
  }
}

export const changeInput = (text) => ({
  type: 'CHANGE_INPUT',
  text,
})
```

- 이러한 액션 생성함수를 만들어서 사용하는 이유는 컴포넌트에서 쉽게 액션을 발생시키기 위함 (export, import)

#### 리듀서 (Reducer)

- 리듀서는 변화를 일으키는 함수이다. 두가지 파라매터를 받음

```javascript
function reducer(state, action) {
  return alteredState
}
```

- 리듀서는, 현재의 상태와 전달 받은 액션을 참고하여 새로운 상태를 만들어서 반환 함.

```javascript
function counter(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    default:
      return state
  }
}
```

#### 스토어 (Store)

- 리덕스에서는 한 애플리케이션 당 하나의 스토어가 필요하다. 스토어 안에는 현재의 앱 상태와 리듀서가 들어가 있고, 추가적으로 몇가지 내장 함수가 있다.

#### 디스패치 (dispatch)

- 디스패치는 스토어의 내장 함수 중 하나이다. 디스패치는 액션을 발생 시키는 것이다. dispatch라는 함수에는 액션을 파라미터로 전달한다.
- ex) dispatch(action)

#### 구독 (subscribe)

- 구독도 스토어의 내장함수 중 하나이다. subscribe 함수는 함수를 파라미터로 받는다. subscribe 함수에 특정 함수를 전달 해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출된다.

### 2. 리덕스의 3가지 규칙

#### 1. 하나의 애플리케이션 안에는 하나의 스토어가 있다.

-
