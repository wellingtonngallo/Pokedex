import React from 'react';
import './style.css';

function MessageState({message, logo}) {
    return (
      
        <div className="content">
 
            <div className="empty-state">
                <img src={logo} height="100"/><br/>
                <p>{message}</p>
            </div>
        </div>
      
    )
}

export default MessageState;