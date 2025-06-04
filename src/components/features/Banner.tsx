import Image from "next/image"

export default function Banner() {
    return (
        <div className="flex items-center justify-center">
            <Image
                src="/images/Logo/Kaleido.png"
                alt="Banner Image"
                width={520}
                height={520}
                className="w-16 h-16 lg:w-[496px] lg:h-[496px]"
                priority
            />
        </div>
    )
}