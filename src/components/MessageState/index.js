import React from 'react';
import './style.css';

export default function MessageState({message, logo}) {
    return (
        <div className="content">
            <div className="empty-state">
                <img src={logo} height="100"/><br/>
                <p>{message}</p>
            </div>
        </div>
    );
}