// src/context/AuthContext.jsx
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const API_URL = 'http://localhost:5000/api/auth';

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['x-auth-token'] = token;
            axios.get(`${API_URL}/user`)
                .then(res => setUser(res.data))
                .catch(() => logoutAction());
        }
        setLoading(false);
    }, [token]);

    const loginAction = async (data) => {
        const res = await axios.post(`${API_URL}/login`, data);
        setToken(res.data.token);
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
    };

    const registerAction = async (data) => {
        await axios.post(`${API_URL}/register`, data);
        // After successful registration, log them in automatically
        await loginAction({ email: data.email, password: data.password });
    };

    const logoutAction = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['x-auth-token'];
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ token, user, loading, loginAction, registerAction, logoutAction }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);