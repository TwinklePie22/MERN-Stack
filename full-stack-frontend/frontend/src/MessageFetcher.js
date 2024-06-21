import React, { useState, useEffect } from 'react';

const MessageFetcher = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9000/api/message')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Message from Backend:</h1>
      {message ? <p>{message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default MessageFetcher;