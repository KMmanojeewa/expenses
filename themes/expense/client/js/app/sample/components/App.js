import React, { useState, useRef } from "react";
import { ThemeContext } from "./ThemeContext";
import { Form } from "./Form";

export default function MyApp() {

    const ref = useRef(false);
    const [theme, setTheme] = useState('light');

    const handleChange = () => {
        if(ref.current.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    };

    return (
        <ThemeContext.Provider value={theme}>
            <label>
                <input
                    type="checkbox"
                    ref={ref}
                    onChange={handleChange}
                />
                Dark theme
            </label>
            <Form />
        </ThemeContext.Provider>
    )
}
