import Card from "@/components/ui/Card";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Main content column */}
            <div className="flex-1 border-x-1 border-zinc-700"> 
                <div className="bg-foreground/0 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex">
                        <div className="flex-1 border-b-1 border-zinc-700 p-3 text-center hover:bg-zinc-900">
                            For you
                        </div>
                        <div className="flex-1 border-b-1 border-zinc-700 p-3 text-center hover:bg-zinc-900">
                            Following
                        </div>
                    </div>
                </div>
                {children}
            </div>

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
        </div>
    )
}