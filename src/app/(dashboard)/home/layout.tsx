import Card from "@/components/ui/Card";
import MainLayout from "@/components/layout/MainLayout";
import LayoutContainer from "@/components/layout/LayoutContainer";
import TransparentHeader from "@/components/ui/TransparentHeader";
import NavButton from "@/components/ui/NavButton";
import StickyPanel from "@/components/layout/StickyPanel";
import NavButtonContainer from "@/components/layout/NavButtonContainer";
import ScrollableContent from "@/components/ui/ScrollableContent";

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
                    <div className="bg-background border-b-1 border-background p-3 text-center">
                        Search Bar here
                    </div>
                <ScrollableContent>
                    <Card variant={"outline"} size={"auth"}>
                        <Card.Header className="text-2xl">
                            Relevant People
                        </Card.Header>
                        <Card.Content>
                            Testing
                        </Card.Content>
                    </Card>
                </ScrollableContent>
            </StickyPanel>
        </LayoutContainer>
    )
}