export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="">
            <div className="border-x-1 h-screen max-w-3xl border-gray-700">
                <div className="grid grid-cols-2">
                    <div className=" border-b-1 border-gray-700 p-3 text-center hover:bg-zinc-800">
                        For you
                    </div>
                    <div className="border-b-1 border-gray-700 p-3 text-center hover:bg-zinc-800">
                        Following
                    </div>
                </div>

                {/* Home Page Feed */}
                {children}

            </div>  
        </div>
    )
}