import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Register = (props) => {

    const history = useHistory();
    const [client, setClient] = useState({
        id: Math.floor(Math.random() * 1000000000),
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        type: "normal"
    });

    const handleChange = e => {
        setClient({ ...client, [e.target.name]: e.target.value });
        console.log(client.firstname);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (client.firstname === '' || client.lastname === '' || client.email === '' || client.password === '') {
            alert("You must fill all of the fields!")
        } else {
            props.addClient(client);
            console.log(client);
            history.push("/login");
        }
    };

    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label htmlFor="fname">Enter firstname:</label>
                    <input onChange={handleChange} type="text" className="form-control" name="firstname" id="fname"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="lname">Enter lastname:</label>
                    <input onChange={handleChange} type="text" className="form-control" name="lastname" id="lname"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input onChange={handleChange} type="email" className="form-control" name="email" id="email"></input>
                </div>

                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input onChange={handleChange} type="password" className="form-control" name="password" id="pwd"></input>
                </div>
                <button type="submit" className="btn btn-secondary btn-block">Register</button>
                <p></p>
                <Link to="/login" className="" href="#">Login</Link>
            </form>
        </div>
    );
}

export default Register;