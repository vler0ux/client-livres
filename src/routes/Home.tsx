import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleConnection = async () => {
        try {
            const response = await fetch('http://localhost:1992/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({login, password})
            })
            const data = await response.json()
            console.log(data)
            if(data.status === 'success') {
                navigate('/books')
                localStorage.setItem('userId', data.userId)
            }
            else {
                alert('Login ou mot de passe incorrect')
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <h1>Home</h1>
            <div className="inputs">
                <div className="input-login">
                    <label htmlFor="login">Login</label>
                    <input 
                        type="text" 
                        name="login" 
                        id="login" 
                        onChange={handleLogin} 
                        value={login}
                    />
                </div>
                <div className="input-password">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        onChange={handlePassword}
                        value={password}
                    />
                </div>
                <button type="submit" onClick={handleConnection}>Connexion</button>
            </div>
        </div>
    )
}