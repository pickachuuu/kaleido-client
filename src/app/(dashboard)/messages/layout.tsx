'use client'

import MainLayout from "@/components/layout/MainLayout";
import StickyPanel from "@/components/layout/StickyPanel";
import LayoutContainer from "@/components/layout/LayoutContainer";
import StickyContainer from "@/components/ui/StickyContainer";
import Header from "@/components/ui/Header";
import { ChatContext, ChatProvider } from "@/context/ChatContext";
import { Info } from "phosphor-react";

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <ChatProvider>
            <LayoutContainer variant={"message"}>
                <MainLayout variant={"message"}>
                    {children}
                </MainLayout>

                <StickyPanel variant={"message"}>
                    <StickyContainer className="px-5 py-2 w-full">
                        <Header className="flex justify-between">
                            <div className="flex gap-4">
                                <div>
                                    Avatar
                                </div>
                                <div>
                                    Icon
                                </div>
                            </div>

                            <div className="flex">
                                <Info/>
                            </div>

                        </Header>
                    </StickyContainer>
                </StickyPanel>
            </LayoutContainer>
        </ChatProvider>
    );
}