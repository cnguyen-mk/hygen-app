import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <p>Header</p>
      <nav>
        <ul>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/Hello'}>Hello</Link>
          </li>
          <li>
            <Link to={'/user'}>User</Link>
          </li>
          <li>  
            <Link to={'/admin-management'}>Admin</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
