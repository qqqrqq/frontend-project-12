

const ChatHeader = ({name, count}) => {

    return (
        <div className="bg-light p-3 shadow-sm-small">
            <p className="m-0">
                <b>
                   {`# ${name}`}
                </b>
            </p>
            <span className="text-muted">
                {`${count} сообщений`}
            </span>
        </div>
    )
}


export default ChatHeader