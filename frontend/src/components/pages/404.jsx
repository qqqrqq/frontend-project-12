import Navbar from "../Navbar"
import { Link } from 'react-router-dom';
import failedImage from '../../images/404.png';

const FailedPage = () => {
    return (
        <>
            <Navbar />
            <div className="d-flex flex-column align-items-center justify-content-center vh-80 text-secondary">
                <img src={failedImage} height={'400px'} className="rounded-circle" alt="" />
                <h4>Страница не найдена</h4>
                <p>Но вы можете перейти <Link to={'/'}>на главную страницу</Link></p>
            </div>
        </>

    )
}

export default FailedPage