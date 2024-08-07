import { Link } from "react-router-dom";


function MainNavigation(){
    return(
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/products">Products</Link>
            <Link to="/users">Users</Link>
        </div>
    );
}

export default MainNavigation;