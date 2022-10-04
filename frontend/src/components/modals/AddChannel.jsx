import {
    Modal, Form, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { string, object } from 'yup';
import useAPIChat from '../../hooks/useAPIChat';
import { useTranslation } from 'react-i18next';

const AddChannel = (props) => {
    const { show, handleClose } = props;
    const { t } = useTranslation()
    const channelsNames = useSelector(state => Object.values(state.channels.entities).map(({ name }) => name))
    const { addNewChannel } = useAPIChat()
    const formik = useFormik({
        initialValues: { name: '' },
        onSubmit: (values) => {
            addNewChannel(values)
            handleClose()
        },
        validationSchema: object().shape({
            name:
                string()
                    .required(t('validationform.required'))
                    .trim()
                    .notOneOf(channelsNames, t('validationform.uniq'))
                    .min(3, t('validationform.min3'))
                    .max(20, t('validationform.max')),
        })
    })
    return (
        <Modal show={show} centered>
            <Modal.Header>
                <Modal.Title>
                    {t('modals.addChannel.tittle')}
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
                        <Form.Label visuallyHidden='true' htmlFor='name'>{t('modals.addChannel.name')}</Form.Label>
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
                            {t('modals.cancel')}
                        </Button>
                        <Button type='submit' variant="primary">
                            {t('modals.addChannel.add')}
                        </Button>
                    </div>
                </Form>

            </Modal.Body>
        </Modal>
    )
}

export default AddChannel