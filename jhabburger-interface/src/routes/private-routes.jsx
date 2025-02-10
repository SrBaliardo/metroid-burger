import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

export const PrivateRoute = ({ element, isAdmin }) => {
  const { userData } = useContext(UserContext);
  const storedUserData = JSON.parse(localStorage.getItem('userData')) || {};

  if (!userData?.token && !storedUserData?.token) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin && !userData?.admin && !storedUserData?.admin) {
    return <Navigate to="/" replace />;
  }

  return element;
};
