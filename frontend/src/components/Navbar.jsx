import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useTranslation } from 'react-i18next';

const ExitBtn = () => {
    const auth = useAuth()
    const {t} = useTranslation()
    return (
        <button type="button" className="btn btn-primary" onClick={auth.logOut}>
          {t('exit')}
        </button>
    )
}

const Navbar = () => {
    const auth = useAuth()
    const {t} = useTranslation()
    return (
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>{t('mainlink')}</Link>
                {auth.logged && <ExitBtn/>}
            </div>
        </nav>
    )
}

export default Navbar