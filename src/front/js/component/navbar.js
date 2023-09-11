import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	const handleLogout = () => {
        actions.logout();
		navigate("/login")
    }

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="text-center mt-5">
				{!store.token ? 
					<Link to="/login">
						<button className="btn btn-success">Log In</button>
					</Link>
					:
					<button className="btn btn-warning" onClick={handleLogout}>Logout</button>
				}
				
			</div>
			</div>
		</nav>
	);
};
