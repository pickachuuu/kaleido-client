import Image from "next/image"

export default function ProfileBanner(){
    return (
        <div className="relative w-full h-56">
            <Image
                src={"/profile/PikaBanner.jpg"}
                alt="Banner"
                fill={true}
            />
        </div>
    )
}