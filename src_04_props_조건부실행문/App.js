import logo from './logo.svg';
import './App.css';
import daum from './assets/daum.png';

// 자식 컴포넌트 : 조건부 렌더링 : view 출력 y/n
const Child5=({...person})=>{
  return (  
    <div className="Child">
      범인 : {person.username}<br></br>
      나이 : {person.age}<br></br>
      {person.children}<br></br>
    </div>
  );
}

// 자식 컴포넌트 : 스프레드
const Child4=({...person})=>{
   return (  
     <div className="Child">
       범인 : {person.username}<br></br>
       나이 : {person.age}<br></br>
       {person.children}<br></br>
     </div>
   );
 }
// 자식 컴포넌트 : 객체분해할당 02 파라미터 사용
const Child3=({username, age, children})=>{
   return (  
     <div className="Child">
       범인 : {username}<br></br>
       나이 : {age}<br></br>
       {children}<br></br>
     </div>
   );
 }


// 자식 컴포넌트 : 객체분해할당 01 props 변수 사용
const Child2=(props)=>{
 const{username, age, children}=props;
  return (  
    <div className="Child">
      범인 : {username}<br></br>
      나이 : {age}<br></br>
      {children}<br></br>
    </div>
  );
}

// 자식 컴포넌트
const Child=(props)=>{
 console.log("props: ", props);

 var username = props.username;
 var age = props.age;
 var children = props.children;

  return (  
    <div className="Child">
      범인 : {username}<br></br>
      나이 : {age}<br></br>
      {children}<br></br>
    </div>
  );
}

// 부모 컴포넌트
function App() {

  const person ={username:"도우너", age:17};

  //조건에 해당하는 변수
  var showImage=true;

  return (   
    <div className="App">
      <h1>App 컴포넌트 : </h1>
      <Child {...person}>
        <h2>몽타주</h2>
        <img src={daum} width="100" height="100" />
      </Child><hr></hr>
      <Child2 {...person}>
        <h2>몽타주</h2>
        <img src={daum} width="100" height="100" />
      </Child2><hr></hr>
      <Child3 {...person}>
        <h2>몽타주</h2>
        <img src={daum} width="100" height="100" />
      </Child3><hr></hr>
      <Child4 {...person}>
        <h2>몽타주</h2>
        <img src={daum} width="100" height="100" />
      </Child4><hr></hr><hr></hr>
      {showImage && 
      <Child5 {...person}>
        <h2>몽타주</h2>
        <img src={daum} width="100" height="100" />
      </Child5>}
    </div>
  );
}

export default App;
