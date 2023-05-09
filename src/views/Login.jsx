import { useState } from "react"
import  useLogin  from '../hooks/useLogin'
import './login.module.css'
import styles from '../components/TaskItem.module.css'

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
            
            <button
                className='btn' 
                disabled={isLoading}
                style={{
                    fontSize: '1rem'
                }}
            >
                    Login
            </button>

            <span className={styles.error}>{error}</span>
        </form>
    )
}