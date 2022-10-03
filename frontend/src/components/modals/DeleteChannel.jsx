import {
    Modal, Button, Form
} from 'react-bootstrap';
import useAPIChat from '../../hooks/useAPIChat.jsx';

const DeleteChannel = (props) => {
    const { deleteShow, handleDeleteClose, id, handleDeleteShow } = props
    const { deleteChannel } = useAPIChat()
    const handleDelete = () => {
        deleteChannel({ id })
        handleDeleteClose()
    }
    return (
        <Modal show={deleteShow} centered>
            <Modal.Header>
                <Modal.Title>
                    Удалить канал
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
                    <span className='fs-5'>Уверены?</span>
                    <div className="d-flex justify-content-end">
                        <Button variant="secondary"
                            className="me-2"
                            onClick={handleDeleteClose}
                        >
                            Отменить
                        </Button>
                        <Button type='submit' variant="danger">
                            Удалить
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}


export default DeleteChannel