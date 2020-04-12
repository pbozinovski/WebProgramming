import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
const Login = ({ login }) => {

    const history = useHistory();
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    //localStorage.clear();
    const handleSumbit = async e => {
        e.preventDefault();
        if (credentials.username === '' || credentials.password === '') {
            alert("Enter username or password");
        } else {
            try{
                let resp = await axios.get(`http://localhost:8080/api/clients/email/${credentials.username}`);
                let data = resp.data;
                if (data) {
                    if (data.clientPassword === credentials.password) {
                        localStorage.setItem('user', JSON.stringify(data));
                        login();
                        history.push("/");
                    } else {
                        alert("wrong credentials")
                    }
                } else {
                    alert("wrong credentials")
                }
            }catch(err){
                alert("User does not exist!")
            }

        }


        //console.log("test");
    }
    //console.log(client);

    return (
        <div id="login">
            <form onSubmit={handleSumbit}>
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" onChange={handleChange} className="form-control" value={credentials.username} name="username" id="email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" onChange={handleChange} className="form-control"  value={credentials.password} name="password" id="pwd"></input>
                </div>
                <button type="submit" className="btn btn-secondary btn-block">Login</button>
                <p></p>
                <span>Don't have an account? </span>
                <Link to="/register" className="" href="#">Sign Up</Link>
            </form>
        </div>
    );
}

export default Login;