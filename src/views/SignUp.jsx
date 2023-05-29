import { useState } from "react"
import useSignUp from '../hooks/useSignUp'

export default function SignUp () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { signUp, error, isLoading } = useSignUp()

    const inputStyles = {
        maxWidth: '340px',
        marginBottom: '.5rem',
        fontSize: '1rem'
    }

    function handleSubmit (e) {
        e.preventDefault()
        signUp(email, password, confirmPassword)
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

            <input
            style={inputStyles}
            className='task'
            value = {confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            name="confirm-password" 
            id="confirm-password"
            placeholder="confirm password"/>
            
            <button
                className='btn' 
                disabled={isLoading}
                style={{
                    fontSize: '1rem'
                }}
            >
                    Sign Up
            </button>

            <span className='error'>{error}</span>
        </form>
    )
}