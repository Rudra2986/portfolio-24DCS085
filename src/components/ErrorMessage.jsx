import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <h3>Error Loading Data</h3>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
