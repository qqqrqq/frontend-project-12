

const Message = () =>{
    const username = 'admin'
    const body = '123'
    return(
        <div className="text-break mb-2">
            <b>{username}</b>: {body}
        </div>
    )
}

export default Message