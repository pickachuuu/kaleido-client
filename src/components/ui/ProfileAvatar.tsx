import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ProfileAvatarVariant = cva(
    'rounded-xl',
    {
        variants: {
            variant: {
                default: 'h-32 w-32'
            }
        },
        defaultVariants:{
            variant: 'default'
        }
    }
)

export interface ProfileAvatarProps extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProfileAvatarVariant>{
        children: React.ReactNode;
        className: string;
}

import Image from "next/image"

export default function ProfileAvatar(){
    return (
        <div className="relative bottom-20 h-36 w-36 rounded-full overflow-hidden border-5 border-background">
            <Image
                src={"/profile/pikaProfile.jpg"}
                alt="temp"
                fill={true}
            />
        </div>
    )
}