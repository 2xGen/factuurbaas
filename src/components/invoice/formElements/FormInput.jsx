import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const FormInput = ({ label, name, value, onChange, placeholder, type = "text", className, inputClassName, labelClassName, ...props }) => {
  return (
    <div className={cn("space-y-1 w-full", className)}>
      {label && <Label htmlFor={name} className={cn("text-sm font-medium text-gray-700", labelClassName)}>{label}</Label>}
      <Input
        type={type}
        id={name}
        name={name}
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500",
          inputClassName
        )}
        {...props}
      />
    </div>
  );
};

export default FormInput;