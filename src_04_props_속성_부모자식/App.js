import logo from './logo.svg';
import './App.css';

// 자식 컴포넌트 06 : 스프레드 연산자 사용 2
function Avatar6({...person}){
  console.log();
  return  (
    <div className="Avatar">
        이름: {person.username}<br></br>
        나이: {person.age}<br></br>
        주소: {person.address}<br></br>
    </div>
  );
}

// 자식 컴포넌트 05 : 스프레드 연산자 사용 1
function Avatar5({username, age, address}){
 
  return  (
    <div className="Avatar">
        이름: {username}<br></br>
        나이: {age}<br></br>
        주소: {address}<br></br>
    </div>
  );
}

// 자식 컴포넌트 04 : 
function Avatar4({ username, xxx, address="부산"}){
  console.log(address);
  // 변수 선언 후 초기화하지 않으면 undefined
  return  (
    <div className="Avatar">
        이름: {username}<br></br>
        나이: {xxx}<br></br>
        주소: {address}<br></br>
    </div>
  );
}


// 자식 컴포넌트 03 : 파라미터 객체분해할당
function Avatar3({username, age, address}){

  return  (
    <div className="Avatar">
        이름: {username}<br></br>
        나이: {age}<br></br>
        주소: {address}<br></br>
    </div>
  );
}

// 자식 컴포넌트 02 : 객체분해할당
function Avatar2(props){

  //객체분해할당
  const { username, age, address} = props;

  return  (
    <div className="Avatar">
        이름: {username}<br></br>
        나이: {age}<br></br>
        주소: {props.address}<br></br>
    </div>
  );
}


// 자식 컴포넌트 01 : props 일반
function Avatar(props){

  console.log("props:",props);
  var username = props.username;
  var age = props.age;
  var xxx = props.xxx;
  return  (
    <div className="Avatar">
        이름: {username}<br></br>
        나이: {age}<br></br>
        주소: {props.address}<br></br>
        내년: {xxx+1}<br></br>
        2년 : {xxx+2}

    </div>
  );
}

function Avatar1({username, age, address}){
  return  (
    <div className="Avatar">
        이름: {username}<br></br>
        나이: {age}<br></br>
        주소: {address}
    </div>
  );
}

// 부모 컴포넌트
function App() {

  var username = "고길동";
  var age = 35;
  var address = "서울";

  var person ={username:"박정자", age:30, address: "부산"};
 
  return (  
    <div className="App">
      <h2>App Component 01 : 일반 props</h2>
      <Avatar username={username} age={age} address={address} xxx={age}/> {/*여기서 자식을 참고한다*/}
      <h2>App Component 02 : 객체분해할당</h2>
      <Avatar2 username={username} age={age} address={address} xxx={age}/> {/*여기서 자식을 참고한다*/}
      <h2>App Component 03 : 파라미터에 객체분해할당</h2>
      <Avatar3 username={username} age={age} address={address} xxx={age}/> {/*여기서 자식을 참고한다*/}
      <h2>App Component 04 : 빈 값을 파라미터에 초기화</h2>
      <Avatar4 username={username} xxx={age}/> {/*여기서 자식을 참고한다*/}
      <h2>App Component 05 : 스프레드 연산자</h2>
      <Avatar5 {...person}/> {/*여기서 자식을 참고한다*/}
      <h2>App Component 06 : 통으로 넘기기</h2>
      <Avatar6 {...person}/> {/*여기서 자식을 참고한다*/}
    </div>
  );
}

export default App;
