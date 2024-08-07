import { Link } from "react-router-dom";


function MainNavigation(){
    return(
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/products">Products</Link>
        </div>
    );
}

export default MainNavigation;