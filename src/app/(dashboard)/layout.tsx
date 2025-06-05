import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex max-w-7xl w-full">
        <aside className="lg:w-64 sm:w-16 h-screen sticky top-0 shrink-0">
          <Sidebar />
        </aside>
        <main className="flex-1 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
