import { useContext } from "react"
import { AuthContext } from "../contexts/Auth"
import { Link } from "react-router-dom"

export default function Links({ setIsNavOpen }) {
  const { authState, authDispatch } = useContext(AuthContext)
  const btnStyles = {
    display: 'inline',
    width: '100px',
    maxWidth: '100px',
    textAlign: 'center'
  }

  return (
    <>
      {
        authState.user == null
          ?
          (
            <span className='noUserActions'>
              <Link to={'/login'} onClick={() => setIsNavOpen && setIsNavOpen(prev => !prev)} style={{
                margin: '.25rem'
              }}><button style={btnStyles} className='btn'>Login</button></Link>
              <Link onClick={() => setIsNavOpen && setIsNavOpen(prev => !prev)} style={{
                margin: '.25rem'
              }} to={'/signUp'}><button style={btnStyles} className='btn'>Sign Up</button></Link>
            </span>
          )
          :
          <>
            <span>{authState.user.email}</span>
            <span className='mx5' />
            <button style={{
              display: 'inline'
            }} className='btn' onClick={() => authDispatch({ type: 'LOGOUT' })}>Logout</button>
          </>
      }
    </>
  )
}
