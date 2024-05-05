import { useState } from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({children}) => {
    const [isLoged, setIsLoged] = useState(false);

    const addUser = (email, password) => {
        localStorage.setItem("email", JSON.stringify({email: email, password: password}));
        console.log("user signup");
        setIsLoged(true);
        return true;
    };

    const checkUser = (email, password) => {
        let data = localStorage.getItem("email");

        const local = JSON.parse(data);
        console.log(local,"local data hun bhai");
        if (local && local.email === email && local.password === password) {
            setIsLoged(true);
            return true;
        } else {
            return false;
        }
    };

    return (
        <UserContext.Provider value={{ isLoged, addUser, checkUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;