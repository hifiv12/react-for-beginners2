## create-react-app
  - 설치준비 및 과정
    * 설치 준비
      - chrome
      - vscode
      - terminal
      - nodejs@14.17.3
      - nvm version check
    * 설치 과정
      - terminal
      
      ```cli
        npx create-react-app react-for-biginner2
      ```
      
      - /src 폴더 세팅
        * App.js and index.js 만 남겨두고 삭제
        * App.js setting

        ```js
          import React from 'react';
          import ReactDOM from 'react-dom/client';
          import App from './App';


          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>
          );
        ```

        * index.js setting

        ```js
          function App() {
            return (
              <div>
                <h1>Welcome back!!!</h1>
              </div>
            );
          }

          export default App;
        ```

    - __강의자 세팅은 17이지만 나의 수준미달로 17에서 커스텀 세팅으로 다운그레이드 할 실력이 안되서 18버전으로 react를 진행__

    - prop-types 
      
      ```cli
        npm i prop-types
      ```

      * prop의 타입을 지정하기 위해 설치

    - css 적용 및 모듈화?
      * 기존의 css를 적용하기 위해서 style.css를 index.html에 연결 
      * 리액트에서는 컴포넌트에 직접 적거나 App.js에 import시키는 방법
      * 하지만 글로벌 적용이 될 수 있기에 각 컴포넌트마다 css파일을 각기 만들어 스타일을 적용할 수 있다. 
      * 그럼 실제 태그내에서는 랜덤으로 class의 이름이 식별할 수 있을 정도로 랜덤으로 적힌다.
      * 즉, 컴포넌트나 스타일을 독립적으로 유지시킬 수 있음

## Effects
  - React.StrictMode 태그는 자손까지 검사를 한다
    * 그래서 render()내 컴포넌트 전의 코드로 콘솔 메세지를 입력해놨다면 2번 출력된다.
    * React.StrictMode 태그를 지우면 원하는대로 1번만 출력 
  
  - 특정 코드가 컴포넌트에서 한번만 실행 할 수 있는 방법 (api.. state가 변경되더라도)

    ```js
      import { useState, useEffect }  from "react";

      useEffect(() => {
        console.log("Call the API");
      }, []);
    ```
  - useEffect("", []) 
    * useEffect는 언제 코드를 실행할 지 선택권을 가질 수 있는 기능
    * useEffect import 후 useEffect() 함수 내에 실행할 코드를 입력하면 refresh되더라도 최초의 렌더시에만 실행 된다.
    * [] 에는 한번이 아니라 괄호 안의 변수가 변화가 일어나면 실행되게 만듦
      + 조건값을 만들어 렌더의 조건을 더 까다롭게 만들 수 있다.
  
  - CleanUp Function
    * useState의 상태가 달라진다면 useEffect가 실행
    * useEffect에 명시된 함수가 실행되고 나서 다시 컴포넌트가 사라질때 함수를 반환하며 clean-up이 실행
    * 개념이 약간 어려운듯 hook 개념이 부족한듯

## Practice : To Do list 
  - setting
    * form 태그 삽입 onSumit 함수 호출, input + button태그 삽입 
    * input 태그 속성 삽입 및 onChange 함수 호출
    
    ```js
      const [toDo, setToDo] = useState("");
      const [toDos, setToDos] = useState([]);
      const onChange = (event) => setToDo(event.target.value)
      const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
          return;
        }
        setToDo("");
        setToDos(currentArray => [toDo, ...currentArray])
      }; 
      console.log(toDos);
    ```

    * preventDefault -> 이동하거나 창의 새로고침 동작을 막는 함수 그러나 Submit은 동작함
      + useState가 바뀔 때 마다 콘솔이 호출 되는 것을 막고 Submit 했을때 prop을 전달해서 일괄처리 
    * useState의 parameter 배열로 받으며 들어온 parameter를 계속해서 배열에 추가하는 것
      + toDo, ...[] -> 기존에 저장된 배열을 가지는 것 거기에 toDo로 들어온 parameter를 추가
    
  - [].map() : 배열에 .map((item) => item.toUpperCase())을 사용하게 되면 length만큼 index를 채우고 원하는 요소로 값을 리턴시킨다.(현재는 공백)
    * 즉 map()을 사용해 가용할 수 있는 새로운 배열에 담는것
    * 같은 component의 list(li)를 render할 때 key라는 prop을 명시 
      - map(item, index)를 포함시키고 li 태그 안 key 속성에 {index}를 넘겨준다 그럼 해결

  - array를 가져와 map으로 array를 item을 변형하여 li가 되게 한것 
  
## Practice : Coin Tracker
  - 용어
    * fetch(url, options)
      + javascript의 내장함수 -> 원격 API 호출
      + url : 원격 api 주소
      + options : options 객체를 받고 Promisi 타입 객체 반환
        - 성공시 response 객체를 resolve
        - 실패시 errer객체를 reject
  
  - response 함수는 json()을 통해 json 타입으로 반환
  - 받은 json파일을 setState에 세팅 후 값을 세팅
  - component 내의 리스트에는 key를 할당해야 콘솔의 warning문구를 제거할 수 있다.

## Practice : Movie App
  - async-await 개념
  
  - Movie.js 작성
    * props 세팅
    * Proptypes 세팅

## router
  - Setting
    * npm i react-router-dom@5.3.0
    * /src/routes and /src/components 폴더 생성
      + routes
      + components 
    * App.js setting

    ```js
      import {
      BrowserRouter as Router,
      Switch,
      Route,
      } from "react-router-dom";
      import Home from "./routes/Home";
      import Detail from "./routes/Detail";

      function App () {
        return (
          <Router>
            <Switch>
              <Route path="/movie">
                <Detail />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        );
      }
    ```
    * react-router-dom
      + BrowserRouter 
      + Switch
        - 한번에 하나의 Route만 render 하기 위한 작업
      + Route
        - url에 들어가는 주소에 따라 표시할 컴포넌트를 render
      + Link
        - 브라우저의 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트

    * 요약
      + 기존 App 컴포넌트에 만들었던 모든 로직을 별개의 파일로 분할
        - Home
        - Detail()
      + App에는 react-router-dom에 관련된 컴포넌트를 작성 -> URL을 감시중 -> 바뀌면 주소의 컴포넌트를 보여준다
  
  - 동적 url (Dynamic url)
    * url에 변수를 넣을 수 있다는 뜻
    * React Router는 다이나믹 url 지원
    * <Route path="/movie/:id">
      + :id는 parameter를 가져올 변수

  - useParams
    * Detail.js
      + import { useParams } from "react-router-dom";
      + const x = useParams(); 
    * Movie.js
      + import { Link } from "react-router-dom";
      + function Movie({ id, medium_cover_image, title, summary, genres }) 
      +  <Link to={`/movie/${id}`}>{title}</Link>
    * 요약 
      + Movie.js 에서 Link를 임포트, Movie 컴포넌트의 인수로 id값을 넣어줌
      + 링크로 전달될 때 id값을 같이 보낸다.
      + 받은 Detail.js에서는 id 값을 받아서 사용
      + App.js에 있는 :id에 매치가 되는 id값을 넘겨주어 url에 표시 

- publishing
  * git add . 
  * github repository remote and push 
  * npm i gh-pages
  * react-script build -> 만든 웹사이트의 production ready code를 생성
    + production ready -> 코드가 압축 및 최적화
  * package.json 
    + 최하단 homepage": "id.github.io/repository"
    + script
      - "deploy": "gh-pages -d build",
      - "predeploy": "npm run build"
  * npm run deploy -> 자동으로 build and optimize and deploy
  