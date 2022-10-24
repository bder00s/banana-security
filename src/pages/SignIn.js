import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from 'axios'

function SignIn() {
    const {login} = useContext(AuthContext); //De login functie uit de Context wordt hier geïmporteerd
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('')

    function handleSubmit(e) { //De functie + eventlistener wat bepaalt wat er gebeurt als je op de submit button klikt
        e.preventDefault();
        console.log("gebruiker is ingelogd" + loginEmail, loginPassword);
        login(); //Hier wordt de login uit de Context gebruikt (wanneer er dus op de button geklikt wordt)

        async function postLogin() {
            try {
                const response = await axios.post('http://localhost:3000/login',
                    {
                        email: {loginEmail},
                        password: {loginPassword},
                    });
                console.log(response);

            } catch (e) {
                console.error(e);
            }

        }


        return (
            <>
                <h1>Inloggen</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                    molestias qui quo unde?</p>

                <form onSubmit={handleSubmit}>
                    <label id="email">
                        Emailadres
                        <input name="email"
                               type="text"
                               onChange={(e) => setLoginEmail(e.target.value)}/>
                    </label>
                    <label id="password">
                        Wachtwoord
                        <input name="password"
                               type="password"
                               onChange={(e) => setLoginPassword(e.target.value)}/>
                    </label>
                    <button type="submit"
                    >
                        Inloggen
                    </button>
                </form>
                {/*// Als je op deze button klikt, wordt je ingelogd*/}

                <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
            </>
        );
    }
}
    export default SignIn;