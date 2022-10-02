import {
    Modal, Button, Form,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { string, object } from 'yup';
const RenameChannel = (props) => {
    const {name, handleRenameClose, renameShow, handleRenameShow} = props
    const channelsNames = useSelector(state => Object.values(state.channels.entities).map(({ name }) => name))
    const formik = useFormik({
        initialValues: {
            name: name
        },
        onSubmit: (values) => {
            console.log(values)
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
        <Modal show={renameShow} centered>
            <Modal.Header>
                <Modal.Title>
                    Переименовать канал
                </Modal.Title>
                <Button variant="secondary"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleRenameClose}
                >
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label visuallyHidden='true' htmlFor='name'>Имя канала</Form.Label>
                        <Form.Control
                            required
                            id='name'
                            name='name'
                            className='mb-3'
                            value={formik.values.name}
                        >
                        </Form.Control>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="secondary"
                            className="me-2"
                            onClick={handleRenameClose}
                        >
                            Отменить
                        </Button>
                        <Button type='submit' variant="primary">
                            Переименовать
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default RenameChannel