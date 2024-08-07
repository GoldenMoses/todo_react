
import {forwardRef} from 'react';


const Child=forwardRef((props, ref)=>{
    console.log(props, ref);
    return (
        <div className="Child">
            <h2>Child 컴포넌트</h2>
            mesg:{props.mesg}
            아이디:<input ref={ref}/>
        </div>
    );
});


// function Child2(props) {

//     //ref는 props로 전달이 안된다.
//     console.log(props);
    
//     return (  
//       <div className="Child">
//         <h2>Child 컴포넌트</h2>
//         아이디 : <input />
        
//       </div>
//     );
//   }

  export default Child;