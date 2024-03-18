import { useSelector, useDispatch } from 'react-redux';

import { AuthState, logIn, logOut } from './app/features/auth/authSlice'
import { RootState } from './app/store'

function App() {
    const { isAuthenticated, user, token } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch()

    const handleLogin = () => {
        const data: Omit<AuthState, 'isAuthenticated'> = { user: { name: 'Test User' }, token: 'Test Token' }
        dispatch(logIn(data))
    }

    const handleLogout = () => {
        dispatch(logOut())
    }

    return (
	    <>
	        {isAuthenticated ? (
                <div>
                    <p>Welcome, {user.name}!</p>
                    <p>Your token is: {token}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p>You are not logged in.</p>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
	    </>
    )
}

export default App
