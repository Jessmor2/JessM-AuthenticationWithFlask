import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		if(store.token && store.token != "" && store.token != undefined) actions.getMessage();
	}, [store.token]);

	return (
		<>
			<div className="text-center mt-5">
				<h1>{store.message}</h1>
				
			</div>
		</>
	);
};
