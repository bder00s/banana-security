import React, {createContext} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, toggleAuth] = React.useState({
        isAuth: false,
        user: null,
    });
    const history = useHistory();

    function login() { //Functie op de button waar de gebruik inlogt en doorgestuurd wordt naar de profielpagina
        console.log("gebruiker is ingelogd");
        toggleAuth({
            ...auth,
            isAuth: true,
            // user: ,
        });
        history.push('/profile');
    }

    function logout() { //Functie op de button waar de gebruiker uitlogt en doorgestuurd wordt naar de hoofdpagina
        console.log("gebruiker is uitgelogd");
        toggleAuth({
            ...auth,
            isAuth: false,
            user: null,
        });
        history.push('/');
    }

    const contextData = {   //Het data object
        isAuth: auth,
        login: login,
        logout: logout,

    }
    return (
//De Context
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider