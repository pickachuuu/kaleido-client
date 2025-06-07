export default function Header({ children }: { children: React.ReactNode}){
    return (
        <div className="h-13 p-1">
            <h1 className="text-xl font-bold">
                {children}
            </h1>
        </div>
    )
}