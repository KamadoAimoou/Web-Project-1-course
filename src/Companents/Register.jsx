import React, { useState } from "react";
import axios from "axios";
import './Register.css';
function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [sms, setSms] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', {
                username,
                password
            });
            setSms(response.data.sms);
        } catch (error) {
            setSms(error.response?.data?.error || 'Ошибка регистрации');
        }
    };

    return (
        <div className="registration-container">

            <h2>Registration page</h2>

            <form onSubmit={handleRegister} className="form-register">
                <input
                    type="text"
                    placeholder="Your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-register"
                />
                <input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-register"
                />

                <button type="submit" className="button-register">Регистрация</button>
            </form>
            <p>{sms}</p>
        </div>
    );
}

export default Register;
