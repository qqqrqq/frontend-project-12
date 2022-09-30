import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setChannel } from '../../store/currentChanelSlice';
import DeleteChannel from '../modals/DeleteChannel';
const Channel = ({ name, id, removable }) => {

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
                <Dropdown.Item>
                    {'Удалить'}
                </Dropdown.Item>
                <Dropdown.Item>
                    {'Переименовать'}
                </Dropdown.Item>
            </Dropdown.Menu>
           {<DeleteChannel/>}
        </Dropdown>
    )

    return removable ? removableChannel : defaultChannel

}

export default Channel