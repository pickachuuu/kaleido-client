export default function NotificationsLayout({ 
    children }: { children: React.ReactNode 
    }){
        return (
        <div className="w-2xl border-r-1 border-zinc-700">
            <div className="grid grid-cols-3 sticky top-0 z-10">
                <div className="col-span-3 bg-foreground/0 backdrop-blur-md p-3">
                    <h1 className="text-xl font-bold">Notifications</h1>
                </div>
            </div>
            {children}
        </div>
        )
    }