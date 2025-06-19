import StickyContainer from "@/components/ui/StickyContainer"
import Header from "@/components/ui/Header"
import SearchBar from "@/components/ui/SearchBar"
import ChatCard from "@/components/ui/ChatCard"

export default function MessagesPage() {
    return (
        <div>
            <StickyContainer>
                <Header className="px-5 py-2">
                    Messages
                </Header>
                <Header className="px-5 py-1">
                <SearchBar/>
                </Header>
            </StickyContainer>

            <ChatCard active={true}>
                <ChatCard.Content/>
            </ChatCard>
        </div>
    )
}
