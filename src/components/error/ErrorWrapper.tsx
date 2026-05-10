'use client';

import React, { useState } from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An unexpected error occurred",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);
  if (error) throw new Error(message);

  return (
    <button
      title="Simulate an error"
      className="bg-red-600 text-white rounded p-2 leading-none font-semibold text-sm hover:bg-red-700 transition"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  );
};

const ErrorWrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="p-4 border border-gray-300 rounded shadow-md">
      <div className="mb-4">
        <ErrorSimulator />
      </div>
      {children}
    </div>
  );
};

export default ErrorWrapper;
