import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setChannel } from '../../store/currentChanelSlice';
const Channel = ({ name, id, removable }) => {


    const activeChannel = useSelector(state => state.currentChannel.currentChannel)

    const styleBtn = activeChannel === id ? 'secondary' : 'light'
    const dispatch = useDispatch()
    return (
        <Button variant={styleBtn} className="w-100 rounded-0 text-start btn" onClick={() =>{dispatch(setChannel({id}))}}>
            <span className="me-1">#</span>
            {name}
        </Button>
    )
}

export default Channel