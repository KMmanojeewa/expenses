import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import "./style.css";

function ExpensesApp() {
    return <App />;
}

const domNode = document.getElementById('expenses-page');
if(domNode) {
    const root = createRoot(domNode);
    root.render(<ExpensesApp />);
}

