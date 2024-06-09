import React, { ReactNode } from "react";
import Header from "../components/Header/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="max-w-screen-md mx-auto">
        <Header />
        <main className="px-4 py-5 md:px-8 space-y-7">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
