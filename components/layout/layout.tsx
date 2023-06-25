'use client'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="container">{children}</main>;
};

export default Layout;
