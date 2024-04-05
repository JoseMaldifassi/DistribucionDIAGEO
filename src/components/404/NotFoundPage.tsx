import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
    let navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <h1 className="text-6xl font-bold">
        ERROR 404
      </h1>
      <p className="text-lg mb-8">
        Page Not Found, please go back
      </p>
      <button
        onClick={() => navigate(-1)}
        style={{ backgroundColor: '#C6CCD4' }}
        className="px-6 py-2 rounded text-black font-semibold"
      >
        Go Back
      </button>
    </div>
  );
}
