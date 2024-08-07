
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
        
        <table>
            <tr>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1b5_jOVMOiNDMyioWIJBy-jY9YfeK7-U_A&s" height="35px" width="45px"/></td>
                <td><h6>Additional Supply Depot is required.</h6></td>
            </tr>
            <tr>
                <td><img src="https://p.turbosquid.com/ts-thumb/86/kJCHBF/Zy6jTGyP/minerals/png/1487766510/600x600/fit_q87/ef0b4a5093131b7b681f1d7b1960f135263e0b2f/minerals.jpg" height="35px" width="45px"/></td>
                <td><h6>We need more minerals.</h6></td>
            </tr>
            <tr>
                <td><img src="https://www.giantbomb.com/a/uploads/square_small/0/5275/1326387-vespene_sc1_game1.jpg" height="35px" width="45px"/></td>
                <td><h6>Insufficient Vespene gas.</h6></td>
            </tr>
        </table>
        
        status: {error.status}<br/>
        status: {error.data.message}<br/>
        message: {error.data.message2}<br/>
        </>
    );

}

export default ErrorPage;