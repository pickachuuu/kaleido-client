import MainLayout from "@/components/layout/MainLayout";
import StickyPanel from "@/components/layout/StickyPanel";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function MessagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer variant={"message"}>
            <MainLayout variant={"message"}>
                {children}
            </MainLayout>

            <StickyPanel variant={"message"}>
                Messages Here
            </StickyPanel>
        </LayoutContainer>
    );
}