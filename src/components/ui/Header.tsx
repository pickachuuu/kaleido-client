export default function Header({ children }: { children: React.ReactNode}){
    return (
        <div className="p-3">
            <h1 className="text-xl font-bold">
                {children}
            </h1>
        </div>
    )
}