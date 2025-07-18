"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { handleGithubLogin } from "@/hooks/useAuthActions";
import LoginModal from "@/components/modal/LoginModal";
import RegisterModal from "@/components/modal/RegisterModal";

export default function AuthForm() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    const handleSignInClick = () => {
        setIsLoginModalOpen(true);
    };

    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    const handleCreateAccountClick = () => {
        setIsRegisterModalOpen(true);
    };

    const handleCloseRegisterModal = () => {
        setIsRegisterModalOpen(false);
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <Card size={"auth"}>
                    
                    <Card.Header size={"xl"} className="my-8 font-extrabold">
                        Dive into the Spectrum
                    </Card.Header>
                    
                    <Card.Header className="text-bold text-2xl">
                        Join Kaleido.
                    </Card.Header>
                    
                    <Card size={"default"} variant={"clear"}>
                        <Card.Content>
                            <div className="col col-span-1">
                                <div>
                                    <Button className="w-full my-2" startIcon="/images/Logo/google.png">
                                        Sign in with Google
                                    </Button>
                                </div>
                                <div>
                                    <Button className="w-full my-2" startIcon="/images/Logo/github.png" onClick={handleGithubLogin}>
                                        Sign in with Github
                                    </Button>
                                </div>

                                <div className="flex items-center gap-4 text-gray-500 text-sm my-6">
                                    <hr className="flex-grow border-t border-gray-500" />
                                    <span className="text-white">OR</span>
                                    <hr className="flex-grow border-t border-gray-500" />
                                </div>

                                <div>
                                    <Button 
                                        className="w-full my-2" 
                                        variant="secondary"
                                        onClick={handleCreateAccountClick}
                                    >
                                        Create an account
                                    </Button>
                                </div>
                                
                                <div className="text-gray-500 text-sm mt-4">
                                    <p>
                                        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                                    </p>
                                </div>

                                <div className="text-bold text-white mt-12">
                                    Already have an account?
                                    <Button 
                                        className="w-full my-2" 
                                        variant="auth"
                                        onClick={handleSignInClick}
                                    >
                                        Sign in
                                    </Button>
                                </div>

                            </div>
                        </Card.Content>
                    </Card>

                    
                
                </Card>
            </div>

            {/* Login Modal */}
            <LoginModal 
                isOpen={isLoginModalOpen} 
                onClose={handleCloseLoginModal} 
            />

            {/* Register Modal */}
            <RegisterModal 
                isOpen={isRegisterModalOpen} 
                onClose={handleCloseRegisterModal} 
            />
        </>
    )
}