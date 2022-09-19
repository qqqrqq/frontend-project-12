

const Message = (body, username) =>{
    
    return(
        <div className="text-break mb-2">
            <b>{username}</b>: {body}
        </div>
    )
}

export default Message