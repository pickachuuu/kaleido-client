import { LoginForm } from "@/components/login-form"
import { Suspense } from "react"

export default function Home() {
  return (
    <div>
      <Suspense>
        <LoginForm/>
      </Suspense>
    </div>
  )
}

