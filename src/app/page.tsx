import AuthForm from "@/components/features/AuthForm"
import Banner from "@/components/features/Banner"

export default function AuthPage() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 p-4 w-full">

                <div className="flex items-center justify-start lg:justify-center">
                    <Banner />
                </div>

                <div className="flex items-center justify-start lg:justify-center">
                    <AuthForm />
                </div>

            </div>
        </div>

    )
}