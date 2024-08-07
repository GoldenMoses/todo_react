import { useParams } from "react-router-dom";

function ProductDetail(){

    // const param = useParams();
    // console.log(param); // id :"p1"

    const {id} = useParams(); //객체분해할당
    console.log(id);

    return(
        <>
        <h1>Product Detail</h1>
        <h2>선택한 id → {id}</h2>
        </>

    );
}

export default ProductDetail;