import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!user) {
            const userdata = localStorage.getItem("user");
            const parsedUser = JSON.parse(userdata);
            if (parsedUser && typeof parsedUser === "object") {
                setUser(() => parsedUser);
            }
        }
    }, [user]);

    return (
        <ChatContext.Provider
            value={{
                user,
                selectedChat,
                setSelectedChat,
                chats,
                setChats,
                messages,
                setMessages,
                setUser,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
