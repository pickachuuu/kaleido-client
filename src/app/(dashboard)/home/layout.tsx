import Card from "@/components/ui/Card";
import MainLayout from "@/components/layout/MainLayout";
import LayoutContainer from "@/components/layout/LayoutContainer";
import StickyPanel from "@/components/layout/StickyPanel";
import ScrollableContent from "@/components/ui/ScrollableContent";
import StickyContainer from "@/components/ui/StickyContainer";
import SearchBar from "@/components/ui/SearchBar";
import Header from "@/components/ui/Header";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LayoutContainer>

            <MainLayout>
                {children}
            </MainLayout>

            <StickyPanel>
                <ScrollableContent>
                    <StickyContainer>

                <Header>
                        <SearchBar/>
                </Header>
                    </StickyContainer>

                    <div className="flex-row">
                        <div className="flex-1 h-96">
                            test
                        </div>
                        <div className="flex-1 h-96">
                            test
                        </div>
                        <div className="flex-1 h-96">
                            test
                        </div>
                    </div>
                </ScrollableContent>
            </StickyPanel>
        </LayoutContainer>
    )
}