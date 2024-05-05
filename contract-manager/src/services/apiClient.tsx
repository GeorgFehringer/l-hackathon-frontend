// ApiClient.tsx

import React, { useState } from 'react';

const BASE_URL = "http://127.0.0.1:5000/api";

// Function to upload a PDF file
export const uploadPDF = async (file: File): Promise<any> => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`${BASE_URL}/pdf`, {
        method: 'POST',
        body: formData,
    });
    return response.json();
};

// Function to retrieve all PDF IDs
export const getPdfs = async (): Promise<any> => {
    const response = await fetch(`${BASE_URL}/pdf`);
    return response.json();
};

// Function to retrieve the text of a specific PDF by ID
export const getPdfTextById = async (pdfId: string): Promise<any> => {
    const response = await fetch(`${BASE_URL}/pdf/${pdfId}`);
    return response.json();
};

// Function to create a new user
export const createUser = async (userData: any): Promise<any> => {
    const response = await fetch(`${BASE_URL}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

// Function to retrieve user data by ID
export const getUserById = async (userId: string): Promise<any> => {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    return response.json();
};

// React component for API interaction
export const ApiInteraction: React.FC = () => {
    const [userId, setUserId] = useState<string>('');
    const [pdfId, setPdfId] = useState<string>('');
    const [user, setUser] = useState<any | null>(null);
    const [pdfText, setPdfText] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = async () => {
        setLoading(true);
        setError(null);
        try {
            const userData = await getUserById(userId);
            setUser(userData);
        } catch (err: any) {
            setError(err.message || "An error occurred");
        }
        setLoading(false);
    };

    const fetchPdfText = async () => {
        setLoading(true);
        setError(null);
        try {
            const pdfData = await getPdfTextById(pdfId);
            setPdfText(pdfData);
        } catch (err: any) {
            setError(err.message || "An error occurred");
        }
        setLoading(false);
    };

    return (
        <div>
            <div>
                <input value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter User ID" />
                <button onClick={fetchUser} disabled={loading}>Fetch User</button>
                {user && (
                    <div>
                        <p>User ID: {user.user_id}</p>
                        <p>Name: {user.firstName} {user.lastName}</p>
                        <p>Role: {user.role}</p>
                        <p>Username: {user.username}</p>
                    </div>
                )}
            </div>
            <div>
                <input value={pdfId} onChange={(e) => setPdfId(e.target.value)} placeholder="Enter PDF ID" />
                <button onClick={fetchPdfText} disabled={loading}>Fetch PDF Text</button>
                {pdfText && (
                    <div>
                        <p>PDF ID: {pdfText.PDF_ID}</p>
                        <p>Text: {pdfText.text}</p>
                    </div>
                )}
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

