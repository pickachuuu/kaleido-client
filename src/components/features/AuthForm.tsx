import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AuthForm() {
    return (
        <div className="flex items-center justify-center">
            <Card className="w-96">
                
                <Card.Header className="text-bold text-2xl">
                    KALEIDO.
                </Card.Header>

                <Card.Content className="h-96">
                    <div className="col col-span-1">
                        <div>
                            <Button className="w-full my-2" startIcon="/images/Logo/google.png">
                                Sign in with Google
                            </Button>
                        </div>
                        <div>
                            <Button className="w-full my-2" startIcon="/images/Logo/github.png">
                                Sign in with Github
                            </Button>
                        </div>

                        {/* divider */}
                        <div className="flex items-center gap-4 text-gray-500 text-sm my-6">
                            <hr className="flex-grow border-t border-gray-500" />
                            <span className="text-white">OR</span>
                            <hr className="flex-grow border-t border-gray-500" />
                        </div>

                        <div>
                            <Button className="w-full my-2" variant="secondary">
                                Create an account
                            </Button>
                        </div>
                        
                        <div className="text-gray-500 text-sm mt-4">
                            <p>
                                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                            </p>
                        </div>

                        <div className="text-bold text-white my-12">
                            Already have an account?
                            <Button className="w-full my-2" variant="outline">
                                Sign in
                            </Button>
                        </div>
                    </div>
                

                </Card.Content>
            
            </Card>
        </div>
    )
}