import Card from "@/components/ui/Card";
import MainLayout from "@/components/layout/MainLayout";
import LayoutContainer from "@/components/layout/LayoutContainer";
import TransparentHeader from "@/components/ui/TransparentHeader";
import NavButton from "@/components/ui/NavButton";
import StickyPanel from "@/components/layout/StickyPanel";
import NavButtonContainer from "@/components/layout/NavButtonContainer";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <LayoutContainer>
            <MainLayout>
                <NavButtonContainer>
                    <NavButton>
                        For you
                    </NavButton>
                    <NavButton>
                        Following
                    </NavButton>
                </NavButtonContainer>

                {children}
            </MainLayout>
            {/* Right sidebar */}
            <div className="hidden lg:block w-96 sticky top-0 h-screen">
                {/* Search bar */}
                <div className="bg-background border-b-1 border-background p-3 text-center">
                    Search Bar here
                </div>

                {/* Scrollable content area */}
                <div className="flex flex-col gap-2 p-4 h-[calc(100vh-64px)] overflow-y-auto">
                    <Card variant={"outline"} size={"auth"}>
                        <Card.Header className="text-2xl">
                            Relevant People
                        </Card.Header>
                        <Card.Content>
                            Testing
                        </Card.Content>
                    </Card>

                    <Card variant={"outline"} size={"auth"}>
                        <Card.Header className="text-2xl">
                            Relevant People
                        </Card.Header>
                        <Card.Content>
                            Testing
                        </Card.Content>
                    </Card>

                    <Card variant={"outline"} size={"auth"}>
                        <Card.Header className="text-2xl">
                            Relevant People
                        </Card.Header>
                        <Card.Content>
                            Testing
                        </Card.Content>
                    </Card>

                    <Card variant={"outline"} size={"auth"}>
                        <Card.Header className="text-2xl">
                            Relevant People
                        </Card.Header>
                        <Card.Content>
                            Testing
                        </Card.Content>
                    </Card>

                    <Card variant={"outline"} size={"auth"}>
                        <Card.Header className="text-2xl">
                            Relevant People
                        </Card.Header>
                        <Card.Content>
                            Testing
                        </Card.Content>
                    </Card>

                    <Card variant={"outline"} size={"auth"}>
                        <Card.Header className="text-2xl">
                            Relevant People
                        </Card.Header>
                        <Card.Content>
                            Testing
                        </Card.Content>
                    </Card>

                    <Card variant={"outline"} size={"auth"}>
                        <Card.Header className="text-2xl">
                            Relevant People
                        </Card.Header>
                        <Card.Content>
                            Testing
                        </Card.Content>
                    </Card>

                    <Card variant={"outline"} size={"auth"}>
                        <Card.Header className="text-2xl">
                            Relevant People
                        </Card.Header>
                        <Card.Content>
                            Testing
                        </Card.Content>
                    </Card>                        
                </div>
            </div>

        </LayoutContainer>
    )
}