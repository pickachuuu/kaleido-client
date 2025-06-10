import MainLayout from "@/components/layout/MainLayout";
import StickyPanel from "@/components/layout/StickyPanel";
import LayoutContainer from "@/components/layout/LayoutContainer";
import TransparentHeader from "@/components/ui/Header";
import StickyContainer from "@/components/ui/StickyContainer";
import searchBar from "@/components/ui/SearchBar";

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