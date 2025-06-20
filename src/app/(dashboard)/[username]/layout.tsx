import MainLayout from "@/components/layout/MainLayout";
import StickyPanel from "@/components/layout/StickyPanel";
import LayoutContainer from "@/components/layout/LayoutContainer";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer>
            <MainLayout>
                {children}
            </MainLayout>

            <StickyPanel>
                Components here
            </StickyPanel>
        </LayoutContainer>
    )
}