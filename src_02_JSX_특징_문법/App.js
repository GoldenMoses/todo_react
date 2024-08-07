import logo from './logo.svg';
import './App.css';


// 10 괄호 없음
function App(){
  return <div><h2>JSX 주석</h2></div>
}

// 09 JSX 주석
function App9(){
  return
    <div>
      <h2>JSX 주석</h2>
      {/* JSX 주석 */}
      <h2>App 컴포넌트</h2>
      {/* 
      <h2>App 컴포넌트 II</h2>
      */}
    </div>
}

// 08 이벤트 구현식 이벤트핸들러는 카멜표기법을 사용해야 된다.
function App8(){
  function go(){
    console.log("go");
  }
  return(
    <div>
      <h2>이벤트 구현</h2>
      <button onClick={go}>OK</button>
    </div>
  )
}

// 07 {...변수} 형식의 spread 연산자 사용 가능
function App7(){
  let target={href:"http://google.com",target:"_blank"};
  return(
    <div>
      <h2>spread 연산자</h2>
      <a {...target}>Google</a>
    </div>
  )
}

// 06 && 이용한 조건부 렌더링
function Menu(){
  return(
    <div className="Menu">
      <h1>menu</h1>
  </div>
  );
}
function App6() {
  let flag = false;
  return (
        <div className="">
          <h2>조건부렌더링</h2>
            {flag  && <Menu/>}<br></br>
            {!flag && <div>Worldly Hi!</div>}<br></br>
        </div>
  );
}

// 05 CSS 적용법 : class 속성과 style 속성
function App5() {

  return (
        <div style={{color:'yellow', fontSize:'30px', backgroundColor:'black', textAlign:'center'}}>
            Hola, Classe!
        </div>
  );
}

// 04  논리값(true/false)과 null은 {변수값} 사용시 출력되질 않는다.
function App4() {

  let name="고길동";
  let address=null;
  let ismarried=true;

  return (
        <div className="App">
          내 이름은 {name}이올시다.<br></br>
          난 여기{address}에 살고,
          결혼은 곧{ismarried}이다.

          </div>
  );
}


// 03 {변수값}은 산술, 비교, 논리, 3항연산자 사용가능하다.
//     -> 산술, 비교, 3항연산은 결과 값이 출력된다.
function App3() {

  let name="고길동";
  const age=35;

  return (
        <div className="App">
          내 이름은 {name}이올시다.<br></br>
          나이는 {age}이다. 기억해둬라. <br></br>
          내년엔 {age+1}이지.<br></br>
          니가 30살이니까, {age<30}<br></br>
          니 형, 40살보다 작고 니 둘째 형 34보다 많지: {age>10 && age<30}<br></br>
          즉슨 {age>30? '반말하지마라':'미안하오'}<br></br>
          </div>
  );
}

// 02 JSX에서 JS의 변수값등을 출력할 때는 {변수값}을 사용한다.
function App2() {

  let name="고길동";
  const age=35;

  return (  
        <div className="App">
          내 이름은 {name}이올시다.<br></br>
          나이는 {age}이다. 기억해둬라. <br></br>
          </div>
  );
}


// 01 반드시 단 하나의 root태그 필요함.
function App1() {
  return (  
      <>
        <div className="App">Hola! Cosmos!</div>
        <div>Cosmos!</div>
      </>
  );
}

function App_template() {
  return (  
        <div className="App">
          Hola! Cosmos!
          </div>
  );
}

export default App;
