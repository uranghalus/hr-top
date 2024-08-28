import { ChildrenProps } from '@/types/childrenprops';
import React from 'react';

const AuthLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {children}
    </div>
  );
};

export default AuthLayout;
