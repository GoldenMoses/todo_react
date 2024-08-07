import logo from './logo.svg';
import './App.css';

/////////////////////////////////////////////////////////

const userList = [{username:"고길동", age:35, address:"서울"},
                  {username:"박정자", age:35, address:"과천"},
                  {username:"도우너", age:17, address:"인천"}
];

//js map 사용방법
var result = userList.map(function(data,idx){
  console.log(data,idx);
  return data;
});

/////////////////////////////////////////////////////////

function Avatar({username, age, address}){
  return(
    <span className="Avatar">
      &nbsp;&nbsp; 이름: {username} &nbsp;&nbsp; 나이: {age} &nbsp;&nbsp; 주소: {address}
    </span>
  );
}


  function App() {
  return (  
    <div className="App">
      <h2>01 배열의 첨자 이용해서 개별접근</h2>
        회원 A : &nbsp;&nbsp; 이름: {userList[0].username} &nbsp;&nbsp;  나이: {userList[0].age} &nbsp;&nbsp; 주소:{userList[0].address}<br></br>
        회원 B : &nbsp;&nbsp; 이름: {userList[1].username} &nbsp;&nbsp;  나이: {userList[1].age} &nbsp;&nbsp; 주소:{userList[1].address}<br></br>
        회원 C : &nbsp;&nbsp; 이름: {userList[2].username} &nbsp;&nbsp;  나이: {userList[2].age} &nbsp;&nbsp; 주소:{userList[2].address}<br></br>

      <h2>02 Avatar 컴포넌트 이용</h2>
        임원 A : <Avatar {...userList[0]}/><br></br>
        임원 B : <Avatar {...userList[1]}/><br></br>
        임원 C : <Avatar {...userList[2]}/><br></br>

      <h2>03 배열의 첨자 반복</h2>
      {/*
        var result = userList.map(function(data,idx)
          console.log(data,idx);
      });

        var result = userList.map((data,idx)=>{
          return data;
          });
        
        var result = userList.map((data,idx)=>data);
      */}
      
      {/* 맵핑을 하게 되면 유일한 값[key 값]을 지정해줘야 한다. 중복값으로 문제 생길 수 있음*/}
      { userList.map((data, idx)=>{
        return <div key={idx}>가족 {idx-1} &nbsp;:&nbsp;&nbsp; 이름: {data.username}&nbsp;&nbsp; 나이: {data.age}&nbsp;&nbsp; 주소: {data.address}</div>
      })}

      <h2>04 Avatar 반복</h2>
      {
        userList.map((data,idx)=>{
          return <div key={idx}>
            <Avatar username={data.username} age={data.age} address={data.address} /><br></br>
          </div>
        })
      }
      <h2>05 Avatar 반복 : 한줄</h2>
      {
        userList.map((data,idx)=><Avatar key={idx}{...data} />
      )
      }
    </div>
  );
}

export default App;
