import {
    Modal, Button, Form,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { string, object } from 'yup';
import useAPIChat from '../../hooks/useAPIChat.jsx';
import { useTranslation } from 'react-i18next';

const RenameChannel = (props) => {
    const {name, handleRenameClose, renameShow,id} = props
    const channelsNames = useSelector(state => Object.values(state.channels.entities).map(({ name }) => name))
    const { renameChannel } = useAPIChat()
    const {t} = useTranslation()
    const formik = useFormik({
        initialValues: {
            name: name,
            id,
        },
        onSubmit: (values) => {
           renameChannel(values)
           handleRenameClose()
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
        <Modal show={renameShow} centered>
            <Modal.Header>
                <Modal.Title>
                    {t('modals.renameChannel.tittle')}
                </Modal.Title>
                <Button variant="secondary"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleRenameClose}
                >
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group>
                        <Form.Label visuallyHidden='true' htmlFor='name'>{t('modals.renameChannel.name')}</Form.Label>
                        <Form.Control
                            required
                            id='name'
                            name='name'
                            className='mb-3'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            isInvalid={!!formik.errors.name}
                        >
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {formik.errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="secondary"
                            className="me-2"
                            onClick={handleRenameClose}
                        >
                           {t('modals.cancel')}
                        </Button>
                        <Button type='submit' variant="primary">
                            {t('modals.renameChannel.rename')}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default RenameChannel