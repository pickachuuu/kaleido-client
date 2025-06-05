import MainLayout from "@/components/layout/MainLayout";
import StickyPanel from "@/components/layout/StickyPanel";
import LayoutContainer from "@/components/layout/LayoutContainer";
import TransparentHeader from "@/components/ui/TransparentHeader";

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer variant={"message"}>
            <MainLayout variant={"message"}>
                <TransparentHeader>
                    Messages
                </TransparentHeader>
                {children}
            </MainLayout>

            <StickyPanel>
                Components here
            </StickyPanel>

        </LayoutContainer>
    );
}