import React, { useRef, useState } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;

    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    // Convert to small offset (max 5px)
    setPosition({ x: x * 0.1, y: y * 0.1 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative overflow-hidden group inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red disabled:opacity-50 disabled:cursor-not-allowed active:shadow-[0_0_0_4px_rgba(200,16,46,0.2)]";

  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-redLight hover:shadow-[0_4px_14px_0_rgba(200,16,46,0.39)]",
    secondary: "bg-white text-brand-dark hover:bg-gray-100 border border-transparent",
    outline: "bg-transparent border border-white text-white hover:bg-white/10",
    ghost: "bg-transparent text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm [&>svg]:w-4 [&>svg]:h-4",
    md: "px-6 py-3 text-base [&>svg]:w-5 [&>svg]:h-5",
    lg: "px-8 py-4 text-lg [&>svg]:w-6 [&>svg]:h-6",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--x': `${position.x}px`,
        '--y': `${position.y}px`
      } as React.CSSProperties}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className} magnetic-btn [transform:translate(var(--x),var(--y))] transition-transform duration-100 ease-linear`}
      {...props}
    >
      {/* Ripple Effect Container could go here */}
      <span className="flex items-center gap-2 [&>svg]:transition-transform [&>svg]:duration-300 group-hover:[&>svg]:rotate-12 relative z-10">
        {children}
      </span>
    </button>
  );
};