import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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

