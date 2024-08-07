
import {forwardRef, useRef, useImperativeHandle} from 'react';


const Child=forwardRef((props, ref)=>{
    console.log(props, ref);
    //부모 ref를 함수 호출에서 이미 100번지를 써서 새로 주소값을 생성해줘야 input 값을 가져올 수 있다.
    const input_ref = useRef(null); 
    ////////////////////////////////////////

    //방법1: 함수선언식 이용
    // useImperativeHandle(ref, ()=>({open}));
    // //App에서 호출
    // function open(){
    //     console.log("open 메서드");
    // }
    
    ////////////////////////////////////////

    //방법2:return{} 안에서 작성된 함수 선언식 사용
    //https://react.dev/reference/react/useImperativeHandle 참조할 것
    //useImperativeHandle에서 이미 주소값을 써버려서 return해줄 주소값이 없으므로 undefined가 생기는거임.
    //따라서 위에서 input_ref 새로 생성해서 새로 return해주면 부모의 input 값을 가져올 수 있다.
    useImperativeHandle(ref, ()=>{
        return{
            open(x){
                console.log("open 메서드  >>>>>>>>>>>>>>>>> ",x);
            },
            close(y){
                console.log("close 메서드 >>>>>>>>>>>>>>>>> ",y);
            },
            input_value(){
                return input_ref.current.value;
            }
        }
        });
    
    ////////////////////////////////////////   

    return (
        <div className="Child">
            <h2>Child 컴포넌트</h2>
            mesg:{props.mesg}
            아이디:<input ref={input_ref}/>
        </div>
    );
});


  export default Child;