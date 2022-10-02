import {
    Modal, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { string, object } from 'yup';
import useAPIChat from '../../hooks/useAPIChat';


const AddChannel = (props) => {
    const { show, handleClose } = props;
    
    const channelsNames = useSelector(state => Object.values(state.channels.entities).map(({ name }) => name))
    const {addNewChannel} = useAPIChat()
    const formik = useFormik({
        initialValues: { name: '' },
        onSubmit: (values) => {
            addNewChannel(values)
            handleClose()
        },
        validationSchema: object().shape({
            name:
                string()
                    .required('Обязательное поле')
                    .trim()
                    .notOneOf(channelsNames, 'Должно быть уникальным')
                    .min(3, 'Не менее 3-х символов')
                    .max(20, 'Не более 20 символов'),
        })
    })
    return (
        <Modal show={show} centered>
            <Modal.Header>
                <Modal.Title>
                    Добавить канал
                </Modal.Title>
                <Button variant="secondary"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleClose}
                >
                </Button>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label visuallyHidden='true' htmlFor='name'>Имя канала</Form.Label>
                        <Form.Control
                            required
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            name='name'
                            id='name'
                            className='mb-3'
                            isInvalid={!!formik.errors.name}
                        >
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className='d-flex justify-content-end'>
                        <Button variant="secondary"
                            className="me-2"
                            onClick={handleClose}
                        >
                            Отменить
                        </Button>
                        <Button type='submit' variant="primary">
                            Добавить
                        </Button>
                    </div>
                </Form>

            </Modal.Body>
        </Modal>
    )
}

export default AddChannel