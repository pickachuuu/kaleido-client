export default function NotificationsLayout({ 
    children }: { children: React.ReactNode 
    }){
        return (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <div className="border-r-1 sm:min-w-xl w-1xl border-zinc-700 col-span-1"> 
                <div className="col-span-3 bg-foreground/0 backdrop-blur-md p-3 sticky top-0 z-10">
                    <h1 className="text-xl font-bold">Notifications</h1>
                </div>
                <div className="grid grid-cols-3 sticky top-0 z-10">
                    {/* buttons here */}
                </div>
                {children}
            </div>
            <div className="hidden lg:block col-span-1">
                Test
            </div>
        </div>
        )
    }