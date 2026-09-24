import { Outlet } from 'react-router-dom'
import Item from './Items'
const Home = () => {
  return (
    <div className='home'>
      <outlet />
    </div>
  )
}

export default Home
