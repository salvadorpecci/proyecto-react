import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './views/SignUp'
import Login from './views/Login'
import Main from './views/Main'
import NavBar from './components/NavBar'
import { useContext } from 'react'
import { AuthContext } from './contexts/Auth'
import useLogin from './hooks/useLogin'

function App() {
  const { authState } = useContext(AuthContext)
  const userIsLogged = () => authState.user != null
  const { isLoading } = useLogin()

  return (
    <BrowserRouter>
      <NavBar/>
      {
        isLoading
        ? <p>Spinner o yo que sé</p>
        : (
          <Routes>
            <Route path='/' element = {userIsLogged() ? <Main/> : <Navigate to={'/login'}/>} />
            <Route path='/login' element = {userIsLogged() ? <Navigate to={'/'}/> : <Login/>}/>
            <Route path='/signUp' element = {userIsLogged() ? <Navigate to={'/'}/> : <SignUp/>}/>
          </Routes>
          )
      }
    </BrowserRouter>
  )

}

export default App