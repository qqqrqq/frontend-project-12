import React from 'react';
import { useTranslation } from 'react-i18next';
import SignupForm from '../SignupForm.jsx';
import logoImage from '../../images/loginPageLogo.jpg';
import Navbar from '../Navbar.jsx';

function SignupPage() {
  const { t } = useTranslation();
  return (
    <>
      <div className="d-flex flex-column h-100">
        <Navbar />
        <div className="container-fluid h-100">
          <div className="row justify-content-center align-content-center h-100">
            <div className="col-12 col-md-8 col-xxl-6">
              <div className="card shadow-sm">
                <div className="card-body row p-5">
                  <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src={logoImage} className="rounded-circle" alt={t('login.header')} />
                  </div>
                  <SignupForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Toastify" />
    </>
  );
}

export default SignupPage;
