import Navbar from "../Navbar"
import { Link } from 'react-router-dom';
import failedImage from '../../images/404.png';
import { useTranslation } from 'react-i18next';

const FailedPage = () => {
    const {t} = useTranslation()
    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center vh-80 text-secondary">
                <img src={failedImage} height={'400px'} className="rounded-circle" alt="" />
                <h4>{t('errorpage.notfound')}</h4>
                <p>{t('errorpage.cannavigate')}<Link to={'/'}>{t('errorpage.tomainpage')}</Link></p>
            </div>
        </>

    )
}

export default FailedPage