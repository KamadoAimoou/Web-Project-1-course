import React, { useState } from "react";
import axios from "axios";
import "./login.css"

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sms, setSms] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password,
            });
            const token = response.data.token;
            // Сохранение токена в localStorage
            localStorage.setItem('token', token);
            setSms('Успешный вход!');
        } catch (error) {
            setSms(error.response?.data?.error || 'Ошибка входа');
        }
    };

    return (
        <div className="login-container">
            
            <h2>Авторизация</h2>

            <form onSubmit={handleLogin} className="form-login">
                <input
                    type="text"
                    placeholder="Your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-login"
                />
                <input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-login"
                />
                <button type="submit" className="button-login">Войти</button>
            </form>

            <p>{sms}</p>
        </div>
    );
}

export default Login;
