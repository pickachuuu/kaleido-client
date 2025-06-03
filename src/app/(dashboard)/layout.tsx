import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
        <Sidebar />
        <main className="flex-1 min-h-screen">
            <div className="">
                {children}
            </div>
        </main>
    </div>
  );
}
