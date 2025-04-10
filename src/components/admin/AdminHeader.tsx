
import React from 'react';

interface AdminHeaderProps {
  title: string;
  description?: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, description }) => {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-pattern bg-[size:20px_20px] opacity-[0.05] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
          {description && (
            <p className="text-lg text-muted-foreground mb-8">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdminHeader;
