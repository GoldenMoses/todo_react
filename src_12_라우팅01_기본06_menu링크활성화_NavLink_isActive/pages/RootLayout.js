
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";


export function RootLayout(){
    return( 
        <>
            <MainNavigation/>
            {/* all the other elements */}
            <hr/>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    );
}
