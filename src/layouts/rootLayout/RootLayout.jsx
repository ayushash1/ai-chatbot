import { Link, Outlet } from 'react-router-dom'
import './rootLayout.css'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
      <header>
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" />
          <span>Neo AI</span>
        </Link>
      </header>
      <main>
        {/* This is where the child routes will be rendered */}
        <Outlet/>  
      </main>
    </div>
  )
}

export default RootLayout