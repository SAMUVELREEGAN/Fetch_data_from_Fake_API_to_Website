import NavSection1 from '../Components/NavSection1'
import {Outlet} from 'react-router-dom'
import NavSection2 from '../Components/NavSection2'

const MyLayout = () => {
  return (
    <div>
        <NavSection1 />
        <NavSection2 />
        <Outlet />

    </div>
  )
}

export default MyLayout