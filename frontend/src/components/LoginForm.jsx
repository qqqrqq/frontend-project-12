
import {
    Form, Button,
} from 'react-bootstrap';


const LoginForm = () => {
    return (
        <>
            <Form className="col-12 col-md-6 mt-3 mt-mb-0 p-3">
                <h1 className='text-center p-2'>Войти</h1>
                <Form.Group className="form-floating mb-3" controlId='username'>
                    <Form.Control type="email" placeholder="Ваш ник" />
                    <Form.Label className="form-label">Ваш ник</Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId='password'>
                    <Form.Control type="paswword" placeholder="Пароль" />
                    <Form.Label className="form-label">Пароль</Form.Label>
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