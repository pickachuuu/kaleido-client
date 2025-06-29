"use client";

import { useState } from "react";
import Modal from "../ui/Modal";
import { X } from "phosphor-react";
import { Button } from "../ui/Button";
import InputField from "../ui/InputField";

interface LoginFormData {
    email: string;
    password: string;
}

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: ""
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<LoginFormData>>({});

    const handleInputChange = (field: keyof LoginFormData, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ""
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<LoginFormData> = {};

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        
        try {
            // TODO: Implement actual login logic here
            console.log("Login attempt:", formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // On success, you would typically:
            // - Call your auth service
            // - Update global auth state
            // - Close modal
            // - Redirect or show success message
            
        } catch (error) {
            console.error("Login error:", error);
            setErrors({ email: "Invalid credentials" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        try {
            // TODO: Implement Google OAuth
            console.log("Google login clicked");
        } catch (error) {
            console.error("Google login error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGithubLogin = async () => {
        setIsLoading(true);
        try {
            // TODO: Implement GitHub OAuth
            console.log("GitHub login clicked");
        } catch (error) {
            console.error("GitHub login error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <Modal>
            <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                        disabled={isLoading}
                    >
                        <X size={20} />
                    </button>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <span className="text-xl font-bold">Logo</span>
                    </div>
                </div>

                {/* Content */}
                <div className="px-8">
                    <div className="text-2xl mb-6 font-bold text-center">
                        Sign in
                    </div>

                    {/* OAuth Buttons */}
                    <div className="space-y-3 mb-6">
                        <Button 
                            className="w-full" 
                            startIcon="/images/Logo/google.png"
                            onClick={handleGoogleLogin}
                            disabled={isLoading}
                        >
                            Sign in with Google
                        </Button>

                        <Button 
                            className="w-full" 
                            startIcon="/images/Logo/github.png"
                            onClick={handleGithubLogin}
                            disabled={isLoading}
                        >
                            Sign in with Github
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 text-gray-500 text-sm my-6">
                        <hr className="flex-grow border-t border-gray-500" />
                        <span className="text-white">OR</span>
                        <hr className="flex-grow border-t border-gray-500" />
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <InputField 
                                label="Email or username" 
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        <div>
                            <InputField 
                                label="Password" 
                                type="password"
                                value={formData.password}
                                onChange={(e) => handleInputChange("password", e.target.value)}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>
                        
                        <Button 
                            type="submit"
                            className="w-full mt-6" 
                            variant="auth"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>
                </div>
            </div>
        </Modal>
    );
}