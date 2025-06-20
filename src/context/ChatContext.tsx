'use client'

import { createContext, useState, useContext } from "react";
import { ChatContextType } from "@/types/ChatContextType";
import { messageType } from "@/types/message-types";

export const ChatContext = createContext<ChatContextType | undefined >(undefined);

export const ChatProvider = ({children}:{children: React.ReactNode}) => {
    const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null)
    const [messages, setMessages] = useState<messageType[]>([])

    return (
        <ChatContext.Provider value={{selectedConversationId, setSelectedConversationId, messages, setMessages}}>
            {children}
        </ChatContext.Provider>
    )
}

export const useChat = () => {
    const context = useContext(ChatContext)
    if (!context) throw new Error("useChat must be used inside a chatProvider");
    return context; 
}


