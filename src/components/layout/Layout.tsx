import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      {children}
    </div>
  );
};

export const Container: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export const Section: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <section className={`py-8 sm:py-12 md:py-16 ${className}`}>
      {children}
    </section>
  );
};