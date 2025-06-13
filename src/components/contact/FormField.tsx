import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
}

interface InputFieldProps extends FormFieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {}

interface TextareaFieldProps extends FormFieldProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, required, className, ...props }, ref) => {
    return (
      <div className={cn('space-y-2', className)}>
        <label className="block text-sm font-medium text-white">
          {label}
          {required && <span className="text-accent-400 ml-1">*</span>}
        </label>
        <input
          className={cn(
            'w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent',
            'hover:border-white/30',
            error && 'border-red-400 focus:ring-red-400'
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export const TextareaField = forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, required, className, ...props }, ref) => {
    return (
      <div className={cn('space-y-2', className)}>
        <label className="block text-sm font-medium text-white">
          {label}
          {required && <span className="text-accent-400 ml-1">*</span>}
        </label>
        <textarea
          className={cn(
            'w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 transition-all duration-200 resize-none',
            'focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent',
            'hover:border-white/30',
            error && 'border-red-400 focus:ring-red-400'
          )}
          rows={6}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}
      </div>
    );
  }
);

TextareaField.displayName = 'TextareaField';