import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { MyProvider } from './Context/MyProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyProvider>
        <App />
    </MyProvider>
);