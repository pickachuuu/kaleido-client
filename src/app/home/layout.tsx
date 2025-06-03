import Sidebar from "@/components/layout/Sidebar";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
        <div className="h-screen flex">
            <Sidebar />
            <main className="flex-1 p-8 bg-background">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>

        </div>
    )
}