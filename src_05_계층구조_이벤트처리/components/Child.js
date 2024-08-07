


function Child (props){
    console.log(props);
    var fun = props.onParent;

    //이벤트 함수
    function handleChildEvent(){
        //코드 추가 작업 가능
        fun("이광수");
    }

    return(
        <div className="Child">
        <h2>O Sweet Child Of Mine</h2>
        <button onClick={fun}>Call Parents</button><br></br>
        <button onClick={()=>fun()}>Call More Parents</button><br></br>

        <button onClick={()=>handleChildEvent()}>Call All Parents</button><br></br>
        </div>
       );
}

export default Child;