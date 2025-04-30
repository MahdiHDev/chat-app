import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const SocketProvider = ({ children, user }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        if (user) {
            const newSocket = io("http://localhost:3000", {
                query: { userId: user._id },
            });

            setSocket(newSocket);

            newSocket.on("connect", () => {
                // console.log("Connected to socket:", newSocket.id);
            });

            newSocket.on("disconnect", () => {
                console.log("Disconnected from socket");
            });
        }
    }, [user]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);
