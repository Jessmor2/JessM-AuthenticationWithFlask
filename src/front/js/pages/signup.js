import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
	const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

	return (
		<>
            <div className="text-center mt-5">
				<h1>Sign Up</h1>
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
                    <button >Signup</button>
			</div>
        </>
    )
    }