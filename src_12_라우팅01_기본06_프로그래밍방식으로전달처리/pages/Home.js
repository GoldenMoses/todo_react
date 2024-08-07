import { Link, useNavigate } from "react-router-dom";    

function Home(){

    const navigate = useNavigate();
    function handleEvent(){
        navigate("/products");
    }

    return(
            <>
                <h2>Home</h2>
                <p>
                    <a href="/products">product : a href</a>
                </p>
                <p>
                    <Link to="/products">product : Link</Link>
                </p>
                <p>
                    <button onClick={handleEvent}>products로 가기(프로그래밍)</button>
                </p>
            </>

    )
}

export default Home;