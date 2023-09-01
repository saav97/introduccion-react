import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './homeApp';
import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App title="Hola soy tu padre" resp="nooooooo!"/>
    </React.StrictMode>
)