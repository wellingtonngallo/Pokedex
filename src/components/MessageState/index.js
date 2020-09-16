import React from 'react';
import './style.css';

export default function MessageState({message, logo}) {
    return (
        <div className="content">
            <div className="empty-state">
                <img data-testid="logo" src={logo} height="80" alt="logo"/><br/>
                <p data-testid="message">{message}</p>
            </div>
        </div>
    );
}