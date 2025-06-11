import Image from "next/image"

type ProfileBannerProps = {
    bannerUrl?: string;
}

export default function ProfileBanner({ bannerUrl }: ProfileBannerProps){
    return (
        <div className="relative w-full h-56">
            <Image
                src={bannerUrl? bannerUrl : "/"}
                alt="Banner"
                fill={true}
            />
        </div>
    )
}