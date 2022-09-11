import { useState } from 'react';
import {
    Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik'
import { string, object } from 'yup';

const LoginForm = () => {

    const [loginError, setLoginError] = useState('');

    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        validationSchema: object().shape({
            name: string()
                .required('Обязательное поле')
                .min(3, 'Не менее 3-х символов')
                .max(20, 'Не более 20 символов'),
            password: string()
                .required('Обязательное поле'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <>
            <Form className="col-12 col-md-6 mt-3 mt-mb-0 p-3" onSubmit={formik.handleSubmit}>
                <h1 className='text-center p-2'>Войти</h1>
                <Form.Group className="form-floating mb-3" controlId='name'>
                    <Form.Control type="name" isInvalid={!!formik.errors.name || !!loginError} onChange={formik.handleChange} value={formik.values.name} placeholder="Ваш ник" />
                    <Form.Label className="form-label">Ваш ник</Form.Label>
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.name}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId='password'>
                    <Form.Control isInvalid={!!formik.errors.password} onChange={formik.handleChange} value={formik.values.password} type="password" placeholder="Пароль" />
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