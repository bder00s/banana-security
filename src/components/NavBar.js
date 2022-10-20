import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useHistory, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const history = useHistory();
    const {isAuth, logout, login} = useContext(AuthContext);
    console.log(isAuth);
    return (
        <>
            <nav>
                <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
                </Link>
{/*//Conditioneel renderen { conditie ? true : false }*/}
                <div>
                    {isAuth ?  //De logout button wordt getoond als gebruiker is ingelogd. Gebruiker wordt doorgelinkt naar homepagina als hij uitlogt
                        <button
                            type="button"
                        onClick={logout}>
                            Logout
                        </button>
                        :
                        <>
                        <button
                            type="button"
                            onClick={login} //De login button wordt getoond als gebruiker niet is ingelogd en gebruiker wordt doorgelinkt naar login pagina
                        >
                            Log in
                        </button>
                        <button
                            type="button"
                            onClick={() => history.push('/signup')}
                        >
                            Registreren
                        </button>
                        </> }
                </div>
            </nav>
        </>
    );
}

export default NavBar;