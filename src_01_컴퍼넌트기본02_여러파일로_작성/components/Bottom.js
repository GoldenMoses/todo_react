import './Bottom.css'

// 함수 선언식
// function Bottom(){
// 함수 표현식
const Bottom = function(){
    return(
        <div className="Bottom">
            <h2>Bottom = 밑바닥</h2>
        </div>
    )
}


// Arrow 표현식
const Bottom2=()=>{
    return(
        <div className="Bottom2">
            <h2>Bottom 밑에 더한 Bottom</h2>
        </div>
    )
}

export {Bottom, Bottom2};