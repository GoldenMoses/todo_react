
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage(){

    const error = useRouteError();
    console.log(error);
    return(
        <>
        <MainNavigation/>
        <hr/>
        <h2>ErrorPage</h2>
        <h6>Additional Supply Depot is required.</h6>
        <h6>We need more minerals.</h6>
        <h6>Insufficient Vespene gas.</h6>
        status: {error.status}<br/>
        status: {error.statusText}<br/>
        message: {error.data}<br/>
        </>
    );

}

export default ErrorPage;