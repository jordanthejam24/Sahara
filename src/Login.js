import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import './Login.css';
import { auth } from 'firebase';

function Login() {
    const history = useHistory();
    //creating variables in react
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();// stops the refresh
        //do login logic here
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            //logged in successfully, redirect to home page
            history.push('/');
        }).catch(e => alert(e.message));
    }
    const register = event => {
        event.preventDefault();
        //register logic
        auth.createUserWithEmailAndPassword(email, password).then(auth => {
            //created a user and logged in and redirect to home page
            history.push('/');
        }).catch(e => alert(e.message));
    }


    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amazon logo" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form method="get">
                <h5>Email (phone for mobile accounts)</h5>
                {/* two react vars stored in state, they will keep track of what is contained in them */}
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" className="login__email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" className="login__password"/>
                    <button onClick={login} type="submit" className="login__signIn">Sign In</button>
                </form>
                <p>By continuing, you agree to Sahara's Conditions of Use and Privacy Notice</p>
                <a href="/help">Need help?</a>
            </div>
            <p className="login__newAccount">New to Sahara?</p>
            <button onClick={register} className="login__register">Create your Sahra account</button>
        </div>
    )
}

export default Login
