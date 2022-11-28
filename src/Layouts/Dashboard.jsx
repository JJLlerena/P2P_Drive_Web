
import { Outlet } from 'react-router-dom';
import Sidebar from '../Navigation/Sidebar';

export default function Dashboard () {
    return(
        <>
            <div className='Dashboard flex'>
            <Sidebar/>
            <Outlet />
            </div>
        </>  
    )
}

