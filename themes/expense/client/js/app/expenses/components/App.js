import React, { useState, useRef } from "react";
import AllExpenses from "./AllExpenses";
import AddExpense from "./AddExpense";
import {NavigationContext} from "./NavigationContext";

export default function App() {

    const ref = useRef(false);
    const [nav, setNav] = useState('add');

    const handleNavChange = (value) => {
        console.log(value)
        setNav(value);
    }

    return (
        <NavigationContext.Provider value={nav} >
            <div className="main-app">
                <div className="sidebar">
                    <ul>
                        <li className={nav === 'all' ? 'active' : ''} onClick={() => handleNavChange('all')} >All Expenses</li>
                        <li className={nav === 'add' ? 'active' : ''} onClick={() => handleNavChange('add')} >Add Expense</li>
                    </ul>
                </div>
                <div className="content">
                    {nav &&
                        (
                            nav === 'all' && <AllExpenses /> ||
                            nav === 'add' && <AddExpense />
                        )
                    }
                </div>
            </div>
        </NavigationContext.Provider>
    )
}
