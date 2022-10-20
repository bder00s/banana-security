import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const { login } = useContext(AuthContext); //De login functie uit de Context wordt hier geïmporteerd

function handleSubmit(e) { //De functie + eventlistener wat bepaalt wat er gebeurt als je op de submit button klikt
    e.preventDefault();
    login(); //Hier wordt de login uit de Context gebruikt (wanneer er dus op de button geklikt wordt)
}


  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
        <p>*invoervelden*</p>
        <button type="submit"
        >
            Inloggen</button>
      </form>
{/*// Als je op deze button klikt, wordt je ingelogd*/}

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;