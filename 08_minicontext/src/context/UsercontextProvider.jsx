import React from "react";
import Usercontext from "./Usercontext"; 

const UsercontextProvider = ({children}) => {
    const [user, setUser] = React.useState();
    return (
        <Usercontext.Provider value={{user, setUser}}>
            {children}
        </Usercontext.Provider>
    )
}

export default UsercontextProvider;