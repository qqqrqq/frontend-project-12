import { useState } from 'react';
import {
    Form, Button,
} from 'react-bootstrap';
import axios from 'axios';
import { useFormik } from 'formik'
import { string, object, ref } from 'yup';
import routes from './routes.js'
import useAuth from '../hooks/useAuth.jsx';
import { useNavigate } from "react-router-dom";

const SignupForm = () => {

    const [loginError, setLoginError] = useState('');
    const path = routes.signup();
    const authorization = useAuth();
 
    const changeLocation = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            comfirm: ''
        },
        validationSchema: object().shape({
            username: string()
                .required('Обязательное поле')
                .min(3, 'Не менее 3-х символов')
                .max(20, 'Не более 20 символов'),
            password: string()
                .required('Обязательное поле')
                .min(6, ('Не менее 6-х символов')),
            confirm: string()
                .oneOf([ref('password'),null], 'Пароли должны совпадать')
        }),
        validateOnChange: false,
        onSubmit: values => {
            const userData = { username: values.username, password: values.password}
            axios.post(path, userData)
                .then(data => {
                    const userToken = data.data
        
                    authorization.logIn()

                    localStorage.setItem('userToken',JSON.stringify(userToken))
                    changeLocation('/')
                }).catch(err => {
                    setLoginError('Пользователь с таким именем уже существует')
                })
          
        }
    })
    return (
        <>
            <Form className="col-12 col-md-6 mt-3 mt-mb-0 p-3" onSubmit={formik.handleSubmit}>
                <h1 className='text-center p-2'>Регистрация</h1>
                <Form.Group className="form-floating mb-3" controlId='username'>
                    <Form.Control type="username" isInvalid={!!formik.errors.username || !!loginError} onChange={formik.handleChange} value={formik.values.name} placeholder="Ваш ник" />
                    <Form.Label className="form-label">Имя пользователя</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        {loginError || formik.errors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId='password'>
                    <Form.Control isInvalid={!!formik.errors.password || !!loginError} onChange={formik.handleChange} value={formik.values.password} type="password" placeholder="Пароль" />
                    <Form.Label className="form-label">Пароль</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId='confirm'>
                    <Form.Control isInvalid={!!formik.errors.confirm || !!loginError} onChange={formik.handleChange} value={formik.values.confirm} type="password" placeholder="Пароль" />
                    <Form.Label className="form-label">Подтвердите пароль</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.confirm}
                    </Form.Control.Feedback>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="outline-primary" type="submit">
                        Зарегистрироваться
                    </Button>
                </div>

            </Form>
        </>
    )
}

export default SignupForm