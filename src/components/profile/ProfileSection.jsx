import React from 'react';
import { cn } from '@/lib/utils';

const ProfileSection = ({ title, icon, children, className }) => (
  <div className={cn("space-y-4", className)}>
    <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-gray-200">
      {icon && React.cloneElement(icon, { className: "w-6 h-6 text-deep-blue" })}
      <h2 className="text-xl font-semibold text-deep-blue">{title}</h2>
    </div>
    {children}
  </div>
);

export default ProfileSection;