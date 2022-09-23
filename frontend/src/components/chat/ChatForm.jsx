import { Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth.jsx'
import useAPIChat from '../../hooks/useAPIChat.jsx'

const ChatForm = () => {
    const inputRef = useRef(null)

    const { username } = useAuth()
    const { sendMessage } = useAPIChat()
    const activeChannelId = useSelector(state => state.currentChannel.currentChannel)
    const formik = useFormik({
        initialValues: {
            body: '',
        },
        onSubmit: values => {
            
             sendMessage({username:username.username,activeChannelId, body: values.body})

        }
    })

    return (
        <div className='mt-auto bg-white w-100 px-5 py-3'>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="py-1 border rounded-2 d-flex">
                    <Form.Control
                        name="body"
                        aria-label={'сообщение'}
                        placeholder={'Введите сообщение'}
                        className="border-0 p-0 ps-2 form-control"
                        value={formik.values.body}
                        onChange={(formik.handleChange)}
                        ref = {inputRef}
                    />
                    <Button type="submit" disabled={!formik.values.body} className="btn btn-group-vertical ms-1 h-100" variant="light">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="30" height="30" fill="currentColor">
                            <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                        <span className="visually-hidden">Отправить</span>
                    </Button>
                </Form.Group>
            </Form>
        </div>
    )
}


export default ChatForm
