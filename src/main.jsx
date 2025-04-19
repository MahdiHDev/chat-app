import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";
import "./index.css";
import { SocketProvider } from "./context/SocketContext.jsx";

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ChatProvider>
            <SocketProvider user={user}>
                <App />
            </SocketProvider>
        </ChatProvider>
    </StrictMode>
);
