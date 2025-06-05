export default function NotificationsLayout({ 
    children }: { children: React.ReactNode 
    }){
        return (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <div className="border-r-1 min-h-screen sm:min-w-xl w-1xl border-zinc-700 col-span-1"> 
                <div className="col-span-3 bg-foreground/0 backdrop-blur-md p-3 sticky top-0 z-10">
                {/* Sticky Nav */}
                    <h1 className="text-xl font-bold">Notifications</h1>
                </div>
                <div className="grid grid-cols-3 sticky top-0 z-10">
                    {/* buttons here */}
                </div>
                {children}
            </div>
            
            <div className="hidden lg:block w-96 sticky top-0 h-screen">
                {/* Search bar */}
                <div className="bg-background border-b-1 border-background p-3 text-center">
                    Search Bar here
                </div>
                {/* Scrollable content area */}
                <div className="flex flex-col gap-2 p-4 h-[calc(100vh-64px)] overflow-y-auto">
                
                </div>
            </div>
        </div>
        )
    }