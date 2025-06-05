export default function TransparentHeader({ children }: { children: React.ReactNode}){
    return (
        <div className="col-span-3 bg-foreground/0 backdrop-blur-md p-3 sticky top-0 z-10">
            <h1 className="text-xl font-bold">
                {children}
            </h1>
        </div>
    )
}