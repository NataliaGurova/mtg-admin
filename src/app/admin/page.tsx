import ErrorWrapper from '@/components/error/ErrorWrapper';
import React from 'react';


const AdminPage = () => {
  return (
    <ErrorWrapper>
      <h1 className="text-xl font-bold">Адмін Dashboard</h1>
      <p className="text-gray-600">Тут буде список карток MTG або інший контент.</p>
    </ErrorWrapper>
  );
};

export default AdminPage;

