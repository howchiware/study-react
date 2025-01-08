import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
//해당 APP 컴포넌트 함수의 포인터를 이 createElement에 전달하면 됨
//ReactDOM.createRoot(entryPoint).render(React.createElement(App));