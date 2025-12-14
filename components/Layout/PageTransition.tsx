import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
    children: ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const location = useLocation();

    const isServices = location.pathname === '/services';

    return (
        <div
            key={location.pathname}
            className={`${isServices ? '' : 'animate-fade-in-up'} w-full h-full`}
        >
            {children}
        </div>
    );
};
