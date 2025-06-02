import AuthForm from "@/components/features/AuthForm"
import Banner from "@/components/features/Banner"

export default function AuthPage() {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[20%] p-4 min-h-screen">
            <Banner />
            <AuthForm />
        </div>
    )
}