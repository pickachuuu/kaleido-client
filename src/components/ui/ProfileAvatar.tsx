'use client'
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"

const ProfileAvatarVariant = cva(
    'relative rounded-full overflow-hidden flex items-center justify-center',
    {
        variants: {
            variant: {
                default: 'bottom-20 h-32 w-32',
                chat: 'h-14 w-14'
            }
        },
        defaultVariants:{
            variant: 'default'
        }
    }
)

export interface ProfileAvatarProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProfileAvatarVariant>{
        className?: string;
        profileUrl?: string;
}

export default function ProfileAvatar({ variant, className, profileUrl, ...props }: ProfileAvatarProps){
    const [imageError, setImageError] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    
    const hasValidImage = profileUrl && !imageError && imageLoaded

    return (
        <div className={cn(ProfileAvatarVariant({ variant }), "border-2 border-white/10 shadow-lg", className)} {...props}>
            {/* Gradient background - only show when no image or image failed to load */}
            {!hasValidImage && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500" />
            )}
            
            {/* Image - only render if we have a valid URL */}
            {profileUrl && (
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image
                        src={profileUrl}
                        alt="Profile"
                        fill={true}
                        className={cn(
                            "object-cover transition-opacity duration-200",
                            hasValidImage ? "opacity-100" : "opacity-0"
                        )}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => {
                            setImageError(true)
                            setImageLoaded(false)
                        }}
                    />
                </div>
            )}
        </div>
    )
}