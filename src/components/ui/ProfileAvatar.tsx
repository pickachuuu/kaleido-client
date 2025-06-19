import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Image from "next/image"

const ProfileAvatarVariant = cva(
    'relative rounded-full overflow-hidden ',
    {
        variants: {
            variant: {
                default: 'bottom-20 h-32 w-32 border-5 border-background',
                chat: 'top-1 h-12 w-12'
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
    return (
        <div className={cn(ProfileAvatarVariant({ className, variant, ...props }))} {...props}>
            <Image
                src={profileUrl? profileUrl: "/"}
                alt="temp"
                fill={true}
            />
        </div>
    )
}