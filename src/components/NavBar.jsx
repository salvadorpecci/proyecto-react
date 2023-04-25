import { useContext } from "react"
import { AuthContext } from "../contexts/Auth"
import { Link } from "react-router-dom"
import './NavBar.module.css'

export default function NavBar() {
    const { authState, authDispatch } = useContext(AuthContext)

    return (
        <header>

            <h1><Link to={'/'}>My todo list</Link></h1>
            <div>
                {

                    authState.user == null
                        ? (
                            <span>
                                <Link to={'/login'}>Login</Link>
                                <Link to={'/signUp'}>Sign Up</Link>
                            </span>
                        )
                        : <>
                            <span>{authState.user.email}</span>
                            <button onClick={() => authDispatch({ type: 'LOGOUT' })}>Logout</button>

                        </>
                }
            </div>
        </header>
    )
}