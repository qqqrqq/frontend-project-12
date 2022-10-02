import {
    Modal,Button,
} from 'react-bootstrap';

const DeleteChannel = (props) => {
    const {deleteShow, handleDeleteClose, handleDeleteShow} = props
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
            </Modal.Body>
        </Modal>
    )
}


export default DeleteChannel