import { useSearchParams } from "react-router-dom";


function ProductDetail2(){

    // const searchParam = useSearchParams();
    // console.log(searchParam); // 배열로 받음

    const [searchParam, setParam] = useSearchParams();
    const id = searchParam.get("id");
    const pw = searchParam.get("pw");
    console.log("id", id);
    console.log("pw", pw);




    return(
        <>
        <h1>Product Detail2</h1>
        
        </>

    );
}

export default ProductDetail2;