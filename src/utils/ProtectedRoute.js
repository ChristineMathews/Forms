// ProtectedRoute.js

import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    if (!isLoggedIn) {
        // If not logged in, redirect to the login page
        navigate('/');
        return null;
    }

    return <Outlet />;
};
