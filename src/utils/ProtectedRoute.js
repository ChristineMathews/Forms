// ProtectedRoute.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Modal from './Modal';

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    if (!isLoggedIn) {
        // If not logged in, show the modal
        setShowModal(true);
        // Redirect to the login page after a delay (or when the modal is closed)
        setTimeout(() => {
            setShowModal(false);
            navigate('/');
        }, 3000); // Redirect after 3 seconds

        return showModal ? <Modal onClose={() => setShowModal(false)} /> : null;
    }

    return children;
};

export default ProtectedRoute;
