import { ChildrenProps } from '@/types/childrenprops';
import React from 'react';

const AuthLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
