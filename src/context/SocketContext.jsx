// import { createContext, useContext, useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const SocketContext = createContext();

// export const useSocket = () => useContext(SocketContext);

// export const SocketProvider = ({ children, user }) => {
//     const socket = useRef(null);

//     useEffect(() => {
//         if (user) {
//             socket.current = io("http://localhost:3000", {
//                 query: {
//                     userId: user._id,
//                 },
//             });

//             socket.current.on("connect", () => {
//                 console.log("Connect to socket", socket.current.id);
//             });// src/context/SocketContext.jsx
import { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children, user }) => {
    const socket = useRef(null);

    useEffect(() => {
        if (user) {
            socket.current = io("http://localhost:3000", {
                query: { userId: user._id },
            });

            socket.current.on("connect", () => {
                console.log("Connected to socket:", socket.current.id);
            });

            socket.current.on("disconnect", () => {
                console.log("Disconnected from socket");
            });

            return () => {
                socket.current.disconnect();
            };
        }
    }, [user]);

    return (
        <SocketContext.Provider value={socket.current}>
            {children}
        </SocketContext.Provider>
    );
};

//             socket.current.on("disconnect", () => {
//                 console.log("Disconnect from socket");
//             });

//             return () => socket.current.disconnect();
//         }
//     }, [user]);

//     return (
//         <SocketContext.Provider value={{ socket }}>
//             {children}
//         </SocketContext.Provider>
//     );
// };
