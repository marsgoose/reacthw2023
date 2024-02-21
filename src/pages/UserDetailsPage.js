import {Outlet, useParams} from "react-router-dom";
import {UserDetails} from "../components";
import {useEffect, useState} from "react";
import {userService} from "../services";


const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {id} =  useParams()

    useEffect(() => {
        userService.byId(id).then(({data})=>setUserDetails(data))
    }, [id]);

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {
    UserDetailsPage
};