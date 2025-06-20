import { messageType } from "./message-types";
type Message = messageType

export interface ChatContextType {
  selectedConversationId: string | null;
  setSelectedConversationId: (id: string | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}