import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            const fetchUser = JSON.parse(localStorage.getItem("user"));
            setUser(fetchUser);
        };

        getUser();
    }, [setUser]);

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
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
