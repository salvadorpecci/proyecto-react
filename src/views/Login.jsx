import { useState } from "react"
import  useLogin  from '../hooks/useLogin'

export default function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()

    const inputStyles = {
        maxWidth: '340px',
        marginBottom: '.2rem',
        fontSize: '1rem'
    }

    function handleSubmit (e) {
        e.preventDefault()
        login(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className="login"> 
            <input style={inputStyles}
            className='task'
            value={email}
            onChange={e => setEmail(e.target.value)} 
            type="email" 
            name="email" 
            id="email" 
            placeholder="email@mail.com"/>

            <input
            style={inputStyles}
            className='task'
            value = {password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password" 
            id="password"
            placeholder="password"/>
            
            <button
                className='btn' 
                disabled={isLoading}
                style={{
                    fontSize: '1rem'
                }}
            >
                    Login
            </button>

            <span className='error'>{error}</span>
        </form>
    )
}