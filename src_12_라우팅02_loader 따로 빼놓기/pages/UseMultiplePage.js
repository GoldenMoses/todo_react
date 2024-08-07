
import { useLoaderData } from "react-router-dom";

function UserMultiplePage(){

    const multix = useLoaderData();
    console.log("multix",multix);

    return(
        <>
            <h2>UserMultiplePage</h2>
     
        </>
    );
}

export default UserMultiplePage;