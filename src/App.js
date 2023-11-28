import React, { useState, useEffect } from 'react';
import './darkMode.css';
import "./App.css"
function App() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>

            <div>
                <p className="dark-light">dark/light</p>
                <div className="container">
                    <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleTheme}/>
                        <label className="switch" htmlFor="checkbox">
                            <span className="slider"></span>
                        </label>
                </div>
            </div>
        </div>
    );
}
export default App;