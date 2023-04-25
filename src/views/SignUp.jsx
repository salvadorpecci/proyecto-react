import { useState } from "react"
import useSignUp from '../hooks/useSignUp'
import './login.module.css'
import styles from '../components/TaskItem.module.css'

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
        <form onSubmit={handleSubmit}> 
            <input style={inputStyles}
            className={styles.task}
            value={email}
            onChange={e => setEmail(e.target.value)} 
            type="email" 
            name="email" 
            id="email" 
            placeholder="email@mail.com"/>

            <input
            style={inputStyles}
            className={styles.task}
            value = {password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password" 
            id="password"
            placeholder="password"/>

            <input
            style={inputStyles}
            className={styles.task}
            value = {confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            name="confirm-password" 
            id="confirm-password"
            placeholder="confirm password"/>
            
            <button
                className={styles.task} 
                disabled={isLoading}
                style={{
                    fontSize: '1rem'
                }}
            >
                    Sign Up
            </button>

            <span className={styles.error}>{error}</span>
        </form>
    )
}