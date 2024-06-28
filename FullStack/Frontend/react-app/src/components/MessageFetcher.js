// frontend/src/components/MessageFetcher.js
import React, { useEffect, useState } from 'react';
import './MessageFetcher.css';

const MessageFetcher = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:9000/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="MessageFetcher">
      <h1>{message}</h1>
    </div>
  );
};

export default MessageFetcher;
