import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";
import "./index.css";
import { SocketProvider } from "./context/SocketContext.jsx";
import { Socket } from "socket.io-client";

const user = JSON.parse(localStorage.getItem("user"));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ChatProvider>
            <SocketProvider value={Socket} user={user}>
                <App />
            </SocketProvider>
        </ChatProvider>
    </StrictMode>
);
