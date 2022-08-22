import React from "react";

import { Link } from "react-router-dom"
function Signup() {
    return (
        <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
                <div className="row mb-5">
                    <div className="col-xl-3 col-xl-12"></div>
                    <div className="col-xl-6 col-xl-12">
                        <div class="card text-left">
                        <img class="card" src="https://www.pngitem.com/pimgs/m/105-1055419_user-avatar-login-account-profile-people-login-people.png" style={{width: "100px", textAlign:"center"}}  alt=""></img>
                            <div class="card-body">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input type='text' placeholder="first name" className="form-control form-control-lg"></input>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type='text' placeholder="last name" className="form-control form-control-lg"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type='email' placeholder="E-mail" className="form-control form-control-lg"></input>
                                </div>
                                <div className="form-group">
                                    <input type='password' placeholder="password" className="form-control form-control-lg"></input>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn text-white form-control form-control-lg">SIGN UP</button>
                                </div>
                                <Link to='/'>Forgot password?</Link>
                                <Link to='/sign' style={{ float: "right" }}>
                                    Allready have an account? Sign In</Link>
                            </div>
                            <h2 className="text-center">login with</h2>
                            <br></br>
                            <Link className="btn bg-primary text-white btn-floating m-2" to="#!" role="button"><i className="fab fa-facebook-f" /> Facebook</Link>
                            {/* Google */}
                            <Link className="btn bg-warning text-white btn-floating m-2" to="#!" role="button"><i className="fab fa-google" /> Google</Link>
                            {/* Linkedin */}
                            <Link className="btn text-white btn-floating m-2" to="#!" role="button"><i className="fab fa-linkedin-in" /> Linkedin</Link>
                            {/* Github */}
                            <Link className="btn bg-dark text-white btn-floating m-2" to="#!" role="button"><i className="fab fa-github" /> Github</Link>
                            <br></br>
                        </div>
                    </div>
                    <div className="col-xl-3 col-xl-12"></div>
                </div>
            </div>



        </>

    )
}

export default Signup;





