export default function StickyPanel({ children }: { children: React.ReactNode }) {
    return (
        <div className="hidden lg:block sticky top-0 h-screen">
            {/* Search bar */}
            <div className="bg-background border-b-1 border-background p-3 text-center">
                {children}
            </div>
            {/* Scrollable content area */}
            {/* <div className="flex flex-col gap-2 p-4 h-[calc(100vh-64px)] overflow-y-auto">
        
            </div> */}
        </div>
    );
}