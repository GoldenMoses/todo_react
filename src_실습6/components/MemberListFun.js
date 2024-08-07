import {useState} from 'react';
import { MemberFun } from './MemberFun';


function MemberListFun(props){
    const [memberData, setMemberData] = useState([])
    const [inputs, setInputs] = useState({
        username: '',
        age: '',
        address: ''
    });
    
    function handleEvent(e){

        e.preventDefault();
        console.log("handleEvent(e)",e);
        var new_inputs = {...inputs, [e.target.name]:e.target.value}
        setInputs(new_inputs);
        console.log("new inputs:" , new_inputs);
    }
    
    function handleSubmit(e){
        console.log("handleSubmit(e)",e);
        e.preventDefault();
    }

    return <><h2>MemberListFun</h2> 
            <form onSubmit={handleSubmit}>
            이름 : <input type="text" name="username" onChange={handleEvent}/><br></br>
            나이 : <input type="text" name="age" onChange={handleEvent}/><br></br>
            주소 : <input type="text" name="address" onChange={handleEvent}/><br></br>
            <button type="submit" name="save" value="save">저장</button>
            </form>   
            <MemberFun/></>
        }

export default MemberListFun;