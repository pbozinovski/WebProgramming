import React from 'react';

const Home = ({ user }) => {


    
    return (
        <div>

            <h1> Hello,  {user != null ? user.clientFirstname + " " + user.clientLastname : "guest"}</h1>
            {user === null ? <h3>Try signing up or login with <strong>admin@hotmail.com</strong> and password: <strong>admin</strong> for admin privileges</h3> : <div></div>}
            
        </div>
    );
}

export default Home;