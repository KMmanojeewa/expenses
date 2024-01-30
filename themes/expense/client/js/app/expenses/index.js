import React from "react";
import { createRoot } from 'react-dom/client';

function ExpensesApp() {
    return <h1>Hello from react</h1>;
}

const domNode = document.getElementById('expenses-page');

const root = createRoot(domNode);
root.render(<ExpensesApp />);
