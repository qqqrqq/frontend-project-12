import { useSelector } from 'react-redux';

const Chanels = () =>{
    const chanels = useSelector(state => state.chanels)
    console.log(chanels)
    return(
        <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
            Каналы
        </div>
    )
}

export default Chanels