import { useSelector } from 'react-redux';
import Channel from './Channel';
import AddChannel from '../modals/AddChannel';
import { useState } from 'react';
import { useEffect } from 'react';
const Chanels = () => {
    const channels = useSelector(state => state.channels)
    const [show, setShow] = useState(false)
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
        <div className="col-4 col-md-2 border-end pt-5 bg-light ps-2 pe-2">
            <div className='d-flex justify-content-between mb-2 ps-3 pe-0'>
                <span>Каналы</span>
                <button type="button" className="p-0 text-primary btn btn-group-vertical" onClick={handleShow}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                    <span className="visually-hidden">+</span>
                </button>
            </div>
            <div>
                {channels.ids.map(id => (
                    <Channel key={id} id={id} name={channels.entities[id].name} removable={channels.entities[id].removable} />
                ))}
            </div>
            <AddChannel show={show} handleClose={handleClose} />
        </div>
    )
}

export default Chanels