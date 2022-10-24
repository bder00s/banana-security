import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from "react";
import axios from 'axios';


function SignUp() {

    const [emailField, setEmailField] = React.useState('') //Deze State wordt gebruikt wanneer gebruiker email invult
    const [passwordField, setPassWordField] = React.useState('') //Deze State wordt gebruikt wanneer gebruiker wachtwoord invult
    const [usernameField, setUsernameField] = React.useState(''); // Deze State wordt gebruikt wanneer gebruiker username invult



    function handleSubmit(e) { //De functie + eventlistener wat bepaalt wat er gebeurt als je op de submit button klikt + alle ingevulde data wordt hiernaartoe doorgestuurd
        e.preventDefault();
        console.log("account aangemaakt:" + emailField, passwordField, usernameField);

    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

            <form onSubmit={handleSubmit}>
                <label id="email">
                    Emailadres
                    <input
                        type="text"
                        name="email"
                        value={emailField}
                        onChange={(e) => setEmailField(e.target.value)} //de value van het emailfield wordt doorgestuurd naar handleSubmit
                    />
                </label>

                <label id="password">
                    Wachtwoord
                    <input
                        type="password"
                        name="password"
                        value={passwordField}
                        onChange={(e) => setPassWordField(e.target.value)} //de value van het passwordfield wordt doorgestuurd naar handleSubmit
                    />
                </label>

                <label id="username">
                    Gebruikersnaam
                    <input
                        type="text"
                        name="username"
                        value={usernameField}
                        onChange={(e) => setUsernameField(e.target.value)}
                    />
                </label>

                <button type="submit"
                >
                    Registreren
                </button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;