import React from "react";
import { createRoot } from 'react-dom/client';
import MyApp from "./components/App";
import "./style.css";

function SampleApp() {
    return <MyApp />;
}

const domNode = document.getElementById('sample-page');
if(domNode) {
    const root = createRoot(domNode);
    root.render(<SampleApp />);
}

