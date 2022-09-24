import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const ExitBtn = () => {
    const auth = useAuth()
    return (
        <button type="button" className="btn btn-primary" onClick={auth.logOut}>
           Выйти
        </button>
    )
}

const Navbar = () => {
    const auth = useAuth()
 
    return (
        <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Hexlet Chat</Link>
                {auth.logged && <ExitBtn/>}
            </div>
        </nav>
    )
}

export default Navbar