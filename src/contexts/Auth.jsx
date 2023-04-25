import { useReducer, createContext, useEffect } from 'react'


export const AuthContext = createContext(null)

export function AuthContextProvider ({children}) {
    const [authState , authDispatch] = useReducer(authReducer,  {
        user: null
    })

    useEffect(() => {
        const storedJSON = localStorage.getItem('user')
        if(storedJSON != null) {
            const user = JSON.parse(storedJSON)
            authDispatch({ type: 'LOGIN' , payload: user })
        }
    }, [])
    return (
        <AuthContext.Provider value={{ authState, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export function authReducer (authState , authAction) {

    switch (authAction.type) {
        case 'LOGIN':
            return { user: authAction.payload }

        case 'LOGOUT':
            return  { user: null }

        default:
            return authState
    }

}