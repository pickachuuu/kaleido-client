import AuthForm from "@/components/features/AuthForm"
import Banner from "@/components/features/Banner"

export default function AuthPage() {
    return (
        <div className="grid grid-cols-2 gap-4 p-4 min-h-screen">
            <Banner />
            <AuthForm />
        </div>
    )
}