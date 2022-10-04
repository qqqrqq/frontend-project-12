import { useTranslation } from 'react-i18next';

const ChatHeader = ({name, count}) => {
    const {t} = useTranslation()
    return (
        <div className="bg-light p-3 shadow-sm-small">
            <p className="m-0">
                <b>
                   {`# ${name}`}
                </b>
            </p>
            <span className="text-muted">
                {t('channels.count',{count})}
            </span>
        </div>
    )
}


export default ChatHeader