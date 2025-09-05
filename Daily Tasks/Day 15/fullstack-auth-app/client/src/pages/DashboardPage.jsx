import { useAuth } from '../context/AuthContext';

export default function DashboardPage() {
    const { user, logoutAction } = useAuth();

    if (!user) return <div className="container"><p>Loading...</p></div>;

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <p>Welcome, <strong>{user.email}</strong>!</p>
            <button onClick={logoutAction}>Logout</button>
        </div>
    );
}