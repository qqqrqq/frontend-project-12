import { useState } from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setChannel } from '../../store/currentChanelSlice';
import DeleteChannel from '../modals/DeleteChannel';
import RenameChannel from '../modals/RenameChannel';
const Channel = ({ name, id, removable }) => {
    const [renameShow, setRenameShow] = useState(false)
    const [deleteShow, setDeleteShow] = useState(false)
    
        
  const handleRenameClose = () => setRenameShow(false);
  const handleRenameShow = () => setRenameShow(true);

  const handleDeleteClose = () => setDeleteShow(false);
  const handleDeleteShow = () => setDeleteShow(true);
 

    const activeChannel = useSelector(state => state.currentChannel.currentChannel)

    const styleBtn = activeChannel === id ? 'secondary' : 'light'
    const dispatch = useDispatch()

    const defaultChannel = (
        <Button variant={styleBtn} className="w-100 rounded-0 text-start btn" onClick={() => { dispatch(setChannel({ id })) }}>
            <span className="me-1">#</span>
            {name}
        </Button>
    )
    const removableChannel = (
        <Dropdown as={ButtonGroup} className="w-100">
            <Button variant={styleBtn} className="w-100 rounded-0 text-start btn text-truncate" onClick={() => { dispatch(setChannel({ id })) }}>
                <span className="me-1">#</span>
                {name}
            </Button>
            <Dropdown.Toggle split variant={styleBtn} className="flex-grow-0 text-end">
                <span className="visually-hidden">{''}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick ={handleDeleteShow}>
                    {'Удалить'}
                </Dropdown.Item>
                <Dropdown.Item onClick ={handleRenameShow}>
                    {'Переименовать'}
                </Dropdown.Item>
            </Dropdown.Menu>
           <DeleteChannel deleteShow={deleteShow} id={id} handleDeleteClose={handleDeleteClose} handleDeleteShow={handleDeleteShow}/>
           <RenameChannel name={name} renameShow={renameShow} id={id} handleRenameClose={handleRenameClose} handleRenameShow={handleRenameShow}/>
        </Dropdown>
    )

    return removable ? removableChannel : defaultChannel

}

export default Channel