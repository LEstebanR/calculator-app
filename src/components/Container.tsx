import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="h-screen flex justify-center items-start bg-slate-500 font-sans text-white ">{children}</div>;
};

export default Container;