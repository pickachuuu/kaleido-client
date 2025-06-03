export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="border-r-1 h-screen w-2xl border-zinc-700">
            <div className="grid grid-cols-2">
                <div className=" border-b-1 border-zinc-700 p-3 text-center hover:bg-zinc-900">
                    For you
                </div>
                <div className="border-b-1 border-zinc-700 p-3 text-center hover:bg-zinc-900">
                    Following
                </div>
            </div>

            {/* Home Page Feed */}
            {children}
        </div>  
    )
}