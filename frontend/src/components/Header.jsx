import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ length, logout, auth, admin }) => {

    return (
        <header id="top">
            <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
                <Link to="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/orders" className="nav-link">Orders</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        {admin ? <Link to="/admin" className="btn btn-outline-info my-2 my-sm-0 icon" href="#">AdminPage</Link> : null}
                        <Link to="/cart" className="btn btn-outline-info my-2 my-sm-0 icon" href="#"><span className="fa fa-shopping-cart"></span>{length}</Link>
                        {
                            auth === false ? <Link to="/login" className="btn btn-outline-info my-2 my-sm-0 icon" href="#">Login</Link> : <Link to="/" onClick={logout} className="btn btn-outline-info my-2 my-sm-0 icon" >Logout</Link>
                        }
                    </form>
                </div>
            </nav>
        </header>
    );
}

export default Header;