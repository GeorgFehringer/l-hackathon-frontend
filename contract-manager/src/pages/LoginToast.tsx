import React, { useEffect, useState } from 'react';
import './LoginToast.css'; // Import the CSS for styling

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
    // Use effect to hide the toast automatically after 3 seconds
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    // Return null if not visible
    if (!isVisible) return null;

    return (
        <div className="toast shake-animation">
            {message}
            <button onClick={onClose}>X</button>
        </div>
    );
};

export default Toast;
