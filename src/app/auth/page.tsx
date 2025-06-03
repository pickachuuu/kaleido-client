import AuthForm from "@/components/features/AuthForm"
import Banner from "@/components/features/Banner"

export default function AuthPage() {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 min-h-screen">
            <div className="flex items-center justify-center">
                <Banner />
            </div>

            <div className="flex items-center justify-center">
                <AuthForm />
            </div>
        </div>
    )
}