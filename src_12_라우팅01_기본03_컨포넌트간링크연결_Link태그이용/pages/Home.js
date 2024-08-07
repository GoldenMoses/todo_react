import { Link } from "react-router-dom";    


function Home(){
    return(
            <>
                <h2>Home</h2>
                <p>
                    <a href="/products">product : a href</a>
                </p>
                <p>
                    <Link to="/products">product : Link</Link>
                </p>
            </>

    )
}

export default Home;