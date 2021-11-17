import React from "react";
import { Link } from "react-router-dom";
//import Welcome  from "../Welcome/Welcome";
import './SignIn.css'

export default function SignIn(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <form className="box" style={{margin:"197px 0px 0px 80px",borderRadius:"20px"}}>
                            <h1>Login</h1>
                            <p className="text-muted"> Please enter your login and password!</p> 
                            <input type="text" name="" placeholder="Username"/> 
                            <input type="password" name="" placeholder="Password"/> 
                            <a className="forgot text-muted" href="/">Forgot password?</a>
                            <Link to="/welcome"> 
                                <input type="submit" name="" value="Login" href="#"/>
                            </Link>
                            <div className="col-md-12">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}