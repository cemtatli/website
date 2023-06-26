'use client'

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="container">{children}</main>;
};

export default Wrapper;
