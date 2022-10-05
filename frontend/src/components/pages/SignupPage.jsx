import React from 'react';
import Navbar from "../Navbar"
import SignupImage from '../../images/signup.jpg'
import SignupForm from "../SignupForm"
const SignupPage = () =>{
    return(
        <div className="d-flex align-items-stretch flex-column bg-light min-vh-100">
                <Navbar/>
                <div className="container-fluid flex-fill d-flex  align-items-center justify-content-center ">
                    <div className="card shadow-sm col-12 col-md-8 col-xxl-6">
                        <div className="card-body d-flex  p-5">
                            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                <img src={SignupImage}  className="rounded-circle" alt="" />
                            </div>
                            <SignupForm/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default SignupPage