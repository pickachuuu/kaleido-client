'use client'

import MainLayout from "@/components/layout/MainLayout";
import StickyPanel from "@/components/layout/StickyPanel";
import LayoutContainer from "@/components/layout/LayoutContainer";
import StickyContainer from "@/components/ui/StickyContainer";
import Header from "@/components/ui/Header";
import { ChatContext, ChatProvider } from "@/context/ChatContext";

// testing
import { useAuth } from "@/context/AuthContext";

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
    const {user} = useAuth()
    return (
        <ChatProvider>
            <LayoutContainer variant={"message"}>
                <MainLayout variant={"message"}>
                    {children}
                </MainLayout>

                <StickyPanel variant={"message"}>
                    <StickyContainer className="px-5 py-2">
                        <Header className="flex justify-between">
                            <div>
                                {user?.username}
                            </div>
                            <div>
                                icon
                            </div>
                        </Header>
                    </StickyContainer>
                </StickyPanel>
            </LayoutContainer>
        </ChatProvider>
    );
}