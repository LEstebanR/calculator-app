import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="h-screen flex justify-center items-center bg-background-main font-sans">{children}</div>;
};

export default Container;