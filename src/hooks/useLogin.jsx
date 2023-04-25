import { useState } from 'react'
import {API_URL} from '../config'
import { useContext } from 'react'
import { AuthContext } from '../contexts/Auth'

export default function useLogin (){
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { authDispatch } = useContext(AuthContext)

    function login (email, password) {
        setIsLoading(true)
        setError('')
     

        fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(Response => {
            Response.json()
                .then(data => {
                    if(Response.ok) {
                        console.log('El login ha funcionado')
                        const userToken = JSON.stringify(data)
                        authDispatch({ type: 'LOGIN' , payload: data})
                        localStorage.setItem('user', userToken)

                    } else {
                        console.log('algo fue mal 1')
                        setError(error => setError(error))
                    }
                })
                .catch(error => {setError(error); console.log('algo fue mal 2')})
        })
        .catch(error => {setError(error); console.log('algo fue mal 3')})
        .finally(() => setIsLoading(false))
    }

    return {
        login,
        error,
        isLoading
    }
}