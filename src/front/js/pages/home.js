import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	const handleLogout = () => {
        actions.logout();
    }

	useEffect(() => {
		actions.getMessage();
	})

	return (
		<>
			<div className="text-center mt-5">
				<h1>{store.message}</h1>
				{!store.token ? 
					<Link to="/login">
						<button className="btn btn-success">Log In</button>
					</Link>
					:
					<button className="btn btn-warning" onClick={handleLogout}>Logout</button>
				}
				
			</div>
		</>
	);
};
