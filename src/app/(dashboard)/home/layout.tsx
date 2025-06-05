export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <div className="border-r-1 h-screen sm:min-w-xl w-1xl border-zinc-700 col-span-1">
                <div className="grid grid-cols-2">
                    <div className=" border-b-1 border-zinc-700 p-3 text-center hover:bg-zinc-900">
                        For you
                    </div>
                    <div className="border-b-1 border-zinc-700 p-3 text-center hover:bg-zinc-900">
                        Following
                    </div>
                </div>
                {/* Home section */}
                {children}
            </div>
            {/* right sidebar */}
            <div className="hidden lg:block col-span-1">
                Test
            </div>
        </div>

    )
}