import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loginAction } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        loginAction({ email, password }).catch(err => alert("Login Failed: " + err.response.data.msg));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}