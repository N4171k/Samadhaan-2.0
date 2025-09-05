import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { registerAction } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        registerAction({ email, password }).catch(err => alert("Registration Failed: " + err.response.data.msg));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Register</button>
        </form>
    );
}