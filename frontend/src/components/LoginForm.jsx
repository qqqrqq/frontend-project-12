import { useState } from 'react';
import {
    Form, Button,
} from 'react-bootstrap';
import axios from 'axios';
import { useFormik } from 'formik'
import { string, object } from 'yup';
import routes from './routes.js'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const [loginError, setLoginError] = useState('');
    const path = routes.getLogin();
    const changeLocation = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: object().shape({
            username: string()
                .required('Обязательное поле')
                .min(3, 'Не менее 3-х символов')
                .max(20, 'Не более 20 символов'),
            password: string()
                .required('Обязательное поле'),
        }),
        validateOnChange: false,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
            axios.post(path, values)
                .then(data => {
                    const userToken = data.data
                    localStorage.setItem('userToken',JSON.stringify(userToken))
                    changeLocation('/')
                }).catch(err => {
                    setLoginError('Неверное имя пользователя или пароль')
                })
          
        }
    })
    return (
        <>
            <Form className="col-12 col-md-6 mt-3 mt-mb-0 p-3" onSubmit={formik.handleSubmit}>
                <h1 className='text-center p-2'>Войти</h1>
                <Form.Group className="form-floating mb-3" controlId='username'>
                    <Form.Control type="username" isInvalid={!!formik.errors.username || !!loginError} onChange={formik.handleChange} value={formik.values.name} placeholder="Ваш ник" />
                    <Form.Label className="form-label">Ваш ник</Form.Label>
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
                <div className="d-grid gap-2">
                    <Button variant="outline-primary" type="submit">
                        Войти
                    </Button>
                </div>

            </Form>
        </>
    )
}

export default LoginForm