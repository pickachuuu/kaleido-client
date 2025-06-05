export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <div className="border-r-1 min-h-screen sm:min-w-xl w-1xl border-zinc-700 col-span-1"> 
                <div className="col-span-3 bg-foreground/0 backdrop-blur-md sticky top-0 z-10">
                <div className="grid grid-cols-2">
                    <div className=" border-b-1 border-zinc-700 p-3 text-center hover:bg-zinc-900">
                        For you
                    </div>
                    <div className="border-b-1 border-zinc-700 p-3 text-center hover:bg-zinc-900">
                        Following
                    </div>
                </div>
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