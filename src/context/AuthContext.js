import React, {createContext} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = React.useState(false);
    const history = useHistory();

    function login() { //Functie op de button waar de gebruik inlogt en doorgestuurd wordt naar de profielpagina
        console.log("gebruiker is ingelogd");
        toggleIsAuth(true);
        history.push('/profile');
    }
function logout(){ //Functie op de button waar de gebruiker uitlogt en doorgestuurd wordt naar de hoofdpagina
        console.log("gebruiker is uitgelogd");
        toggleIsAuth(false);
        history.push('/');
}
    const contextData = {   //Het data object
        isAuth: isAuth,
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