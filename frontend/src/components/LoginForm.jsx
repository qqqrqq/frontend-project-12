import { useState } from 'react';
import {
    Form, Button,
} from 'react-bootstrap';
import axios from 'axios';
import { useFormik } from 'formik'
import { string, object } from 'yup';
import routes from './routes.js'
import useAuth from '../hooks/useAuth.jsx';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const LoginForm = () => {

    const [loginError, setLoginError] = useState('');
    const path = routes.getLogin();
    const authorization = useAuth();
    const {t} = useTranslation()
    const changeLocation = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: object().shape({
            username: string()
                .required(t('validationform.required'))
                .min(3, t('validationform.min3'))
                .max(20, t('validationform.max')),
            password: string()
                .required(t('validationform.required')),
        }),
        validateOnChange: false,
        onSubmit: values => {
            axios.post(path, values)
                .then(data => {
                    const userToken = data.data
        
                    authorization.logIn()

                    localStorage.setItem('userToken',JSON.stringify(userToken))
                    changeLocation('/')
                }).catch(err => {
                    setLoginError(t('validationform.errorlogin'))
                })
          
        }
    })
    return (
        <>
            <Form className="col-12 col-md-6 mt-3 mt-mb-0 p-3" onSubmit={formik.handleSubmit}>
                <h1 className='text-center p-2'>{t('loginform.enter')}</h1>
                <Form.Group className="form-floating mb-3" controlId='username'>
                    <Form.Control type="username" isInvalid={!!formik.errors.username || !!loginError} onChange={formik.handleChange} value={formik.values.name} placeholder="Ваш ник" />
                    <Form.Label className="form-label">{t('loginform.nick')}</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        {loginError || formik.errors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId='password'>
                    <Form.Control isInvalid={!!formik.errors.password || !!loginError} onChange={formik.handleChange} value={formik.values.password} type="password" placeholder="Пароль" />
                    <Form.Label className="form-label">{t('loginform.password')}</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="outline-primary" type="submit">
                      {t('loginform.enter')}
                    </Button>
                </div>

            </Form>
        </>
    )
}

export default LoginForm