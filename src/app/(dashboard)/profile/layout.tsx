import MainLayout from "@/components/layout/MainLayout";
import StickyPanel from "@/components/layout/StickyPanel";
import LayoutContainer from "@/components/layout/LayoutContainer";
import TransparentHeader from "@/components/ui/TransparentHeader";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutContainer>
            <MainLayout>
                <TransparentHeader>
                    Profile
                </TransparentHeader>
                {children}
            </MainLayout>

            <StickyPanel>
                Components here
            </StickyPanel>
        </LayoutContainer>
    )
}