import MainLayout from "@/components/layout/MainLayout";
import StickyPanel from "@/components/layout/StickyPanel";
import LayoutContainer from "@/components/layout/LayoutContainer";
import StickyContainer from "@/components/ui/StickyContainer";
import Header from "@/components/ui/Header";

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer variant={"message"}>
            <MainLayout variant={"message"}>
                {children}
            </MainLayout>

            <StickyPanel variant={"message"}>
                <StickyContainer className="px-5 py-2">
                    <Header>
                        Username
                    </Header>
                </StickyContainer>
            </StickyPanel>
        </LayoutContainer>
    );
}