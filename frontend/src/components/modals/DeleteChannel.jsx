import {
    Modal, Button, Form
} from 'react-bootstrap';
import useAPIChat from '../../hooks/useAPIChat.jsx';
import { useTranslation } from 'react-i18next';

const DeleteChannel = (props) => {
    const { deleteShow, handleDeleteClose, id, handleDeleteShow } = props
    const {t} = useTranslation()
    const { deleteChannel } = useAPIChat()
    const handleDelete = () => {
        deleteChannel({ id })
        handleDeleteClose()
    }
    return (
        <Modal show={deleteShow} centered>
            <Modal.Header>
                <Modal.Title>
                    {t('modals.deleteChannel.tittle')}
                </Modal.Title>
                <Button variant="secondary"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleDeleteClose}
                >
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleDelete}>
                    <span className='fs-5'>{t('modals.deleteChannel.sure')}</span>
                    <div className="d-flex justify-content-end">
                        <Button variant="secondary"
                            className="me-2"
                            onClick={handleDeleteClose}
                        >
                            {t('modals.cancel')}
                        </Button>
                        <Button type='submit' variant="danger">
                           {t('modals.deleteChannel.delete')}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}


export default DeleteChannel