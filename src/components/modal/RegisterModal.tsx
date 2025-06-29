"use client";

import { useState } from "react";
import Modal from "../ui/Modal";
import { X } from "phosphor-react";
import { Button } from "../ui/Button";
import InputField from "../ui/InputField";

interface RegisterFormData {
    name: string;
    username: string;
    email: string;
    birthdate: string;
    password: string;
    confirmPassword: string;
}

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
    const [formData, setFormData] = useState<RegisterFormData>({
        name: "",
        username: "",
        email: "",
        birthdate: "",
        password: "",
        confirmPassword: ""
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<RegisterFormData>>({});

    const handleInputChange = (field: keyof RegisterFormData, value: string) => {
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
        const newErrors: Partial<RegisterFormData> = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        // Username validation
        if (!formData.username.trim()) {
            newErrors.username = "Username is required";
        } else if (formData.username.trim().length < 3) {
            newErrors.username = "Username must be at least 3 characters";
        } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
            newErrors.username = "Username can only contain letters, numbers, and underscores";
        }

        // Email validation
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        // Birthdate validation
        if (!formData.birthdate) {
            newErrors.birthdate = "Birthdate is required";
        } else {
            const birthDate = new Date(formData.birthdate);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            if (age < 13) {
                newErrors.birthdate = "You must be at least 13 years old";
            }
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = "Password must contain at least one uppercase letter, one lowercase letter, and one number";
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
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
            // TODO: Implement actual registration logic here
            console.log("Registration attempt:", formData);
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // On success, you would typically:
            // - Call your auth service
            // - Update global auth state
            // - Close modal
            // - Redirect or show success message
            
        } catch (error) {
            console.error("Registration error:", error);
            setErrors({ email: "Registration failed. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleRegister = async () => {
        setIsLoading(true);
        try {
            // TODO: Implement Google OAuth registration
            console.log("Google registration clicked");
        } catch (error) {
            console.error("Google registration error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGithubRegister = async () => {
        setIsLoading(true);
        try {
            // TODO: Implement GitHub OAuth registration
            console.log("GitHub registration clicked");
        } catch (error) {
            console.error("GitHub registration error:", error);
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
                        Create your account
                    </div>

                    {/* OAuth Buttons */}
                    <div className="space-y-3 mb-6">
                        <Button 
                            className="w-full" 
                            startIcon="/images/Logo/google.png"
                            onClick={handleGoogleRegister}
                            disabled={isLoading}
                        >
                            Sign up with Google
                        </Button>

                        <Button 
                            className="w-full" 
                            startIcon="/images/Logo/github.png"
                            onClick={handleGithubRegister}
                            disabled={isLoading}
                        >
                            Sign up with Github
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 text-gray-500 text-sm my-6">
                        <hr className="flex-grow border-t border-gray-500" />
                        <span className="text-white">OR</span>
                        <hr className="flex-grow border-t border-gray-500" />
                    </div>

                    {/* Registration Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name and Username Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <InputField 
                                    label="Full Name" 
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>
                            <div>
                                <InputField 
                                    label="Username" 
                                    type="text"
                                    value={formData.username}
                                    onChange={(e) => handleInputChange("username", e.target.value)}
                                />
                                {errors.username && (
                                    <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                                )}
                            </div>
                        </div>

                        {/* Email and Birthdate Row */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <InputField 
                                    label="Email" 
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
                                    label="Birthdate" 
                                    type="date"
                                    value={formData.birthdate}
                                    onChange={(e) => handleInputChange("birthdate", e.target.value)}
                                />
                                {errors.birthdate && (
                                    <p className="text-red-500 text-sm mt-1">{errors.birthdate}</p>
                                )}
                            </div>
                        </div>

                        {/* Password and Confirm Password Row */}
                        <div className="grid grid-cols-2 gap-4">
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
                            <div>
                                <InputField 
                                    label="Confirm Password" 
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                                )}
                            </div>
                        </div>
                        
                        <Button 
                            type="submit"
                            className="w-full mt-6" 
                            variant="auth"
                            disabled={isLoading}
                        >
                            {isLoading ? "Creating account..." : "Create account"}
                        </Button>
                    </form>

                    {/* Terms and Privacy */}
                    <div className="text-gray-500 text-sm mt-4 text-center">
                        <p>
                            By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                        </p>
                    </div>
                </div>
            </div>
        </Modal>
    );
} 