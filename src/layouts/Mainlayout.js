import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

const Mainlayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {
    Mainlayout
};