import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
const Channel = ({ name, id, removable }) => {

 //   const activeChannel = useSelector(state => state.currentChanel.currentChannel)
    const activeChannel = 1
    const styleBtn = activeChannel === id ? 'secondary' : 'light'
    
    return (
        <Button variant={styleBtn} className="w-100 rounded-0 text-start btn" onClick={() =>{}}>
            <span className="me-1">#</span>
            {name}
        </Button>
    )
}

export default Channel