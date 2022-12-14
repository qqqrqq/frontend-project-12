import React from 'react';
import Navbar from "../Navbar"
import LoginImage from '../../images/loginpage.jpg'
import LoginForm from "../LoginForm"
import { useTranslation } from 'react-i18next';
const LoginPage = () => {
    const {t} = useTranslation()
    return (
        <>
            <div className="d-flex align-items-stretch flex-column bg-light min-vh-100">
                <Navbar />
                <div className="container-fluid flex-fill d-flex  align-items-center justify-content-center ">
                    <div className="card shadow-sm col-12 col-md-8 col-xxl-6">
                        <div className="card-body d-flex  p-5">
                            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                <img src={LoginImage}  className="rounded-circle" alt="" />
                            </div>
                            <LoginForm />
                        </div>
                        <div className="card-footer p-4">
                            <div className="text-center">
                                <span className="p-1">
                                   {t('loginpage.noaccount')}
                                </span>
                                <a href="/signup">{t('loginpage.registration')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default LoginPage