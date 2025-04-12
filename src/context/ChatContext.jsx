import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);

    return (
        <ChatContext.Provider
            value={{
                user,
                setUser,
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
