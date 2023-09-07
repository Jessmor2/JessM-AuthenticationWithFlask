import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password
                }
            )
        }

        fetch("https://jubilant-space-succotash-xjg44w66495fp7r4-3001.app.github.dev/api/token", options)
        .then(response => {
            if(response.status === 200) return response.json();
        })
        .then(data => console.log("Access token: ", data))
        .catch(error => console.log("There was an error: ", error))
    }

	return (
		<>
			<div className="text-center mt-5">
				<h1>Sign In</h1>
					<label htmlFor="email"><strong>Email: </strong></label>
					<input type="test" id="email" name="email" 
                        onChange={e => setEmail(e.target.value)} value={email}></input>
                    <br></br>
					<br></br>
					<label className="mx2" htmlFor="password"><strong>Password: </strong></label>
					<input type="password" id="password" name="password" 
                        onChange={e => setPassword(e.target.value)} value={password}></input>
					<br></br>
					<br></br>
					<button onClick={handleLogin}>Login</button>
			</div>
		</>
	);
};
