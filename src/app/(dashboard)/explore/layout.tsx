import MainLayout from "@/components/layout/MainLayout";
import StickyPanel from "@/components/layout/StickyPanel";
import LayoutContainer from "@/components/layout/LayoutContainer";
import TransparentHeader from "@/components/ui/TransparentHeader";

export default function ExploreLayout({ children }: { children: React.ReactNode} ){
    return (
        <LayoutContainer>
            <MainLayout>
                <TransparentHeader>
                    Explore
                </TransparentHeader>
                {children}
            </MainLayout>

            <StickyPanel>
                Components here
            </StickyPanel>
        </LayoutContainer>
    )
}