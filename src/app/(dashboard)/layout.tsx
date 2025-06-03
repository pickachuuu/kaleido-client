import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center w-full">
      <div className="flex max-w-7xl w-full">
        <aside className="w-64 h-screen sticky top-0 shrink-0 border-r border-zinc-700">
          <Sidebar />
        </aside>
        <main className="flex-1 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}
