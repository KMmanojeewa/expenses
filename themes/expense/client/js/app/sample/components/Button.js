import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export function Button({ children }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button className={className}>
            {children}
        </button>
    );
}
