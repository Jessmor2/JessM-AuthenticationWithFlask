import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center mt-5">
				<h1>Sign Up</h1>
				<form>
					<label for="email"><strong>Email: </strong></label>
					<input type="test" id="email" name="email"></input>
					<label className="mx2" for="password"><strong>Password: </strong></label>
					<input type="text" id="password" name="password"></input>
					<br></br>
					<br></br>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
		</>
	);
};
