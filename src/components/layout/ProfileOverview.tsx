
import { CalendarPlus } from "phosphor-react"
import ProfileAvatar from "../ui/ProfileAvatar"
import ProfileBanner from "../ui/ProfileBanner"
import { Button } from "../ui/Button"
import { profileProps } from "@/types/profileTypes"

const user: profileProps = {
    username: "Pika",
    email: "Pika@gmail.com",
    bannerUrl: "/profile/PikaBanner.jpg",
    profileImage: "/profile/PikaProfile.jpg",
    followerCount: 98,
    followingCount: 1,
    createdAt: "October 21"
}

export default function ProfileOverview(){


    return (
        <div>
        <ProfileBanner bannerUrl={user.bannerUrl}/>
            <div className="flex w-full max-h-20 justify-between px-4 py-2">
                <ProfileAvatar profileUrl={user.profileImage}/>
                <Button variant={"outline"} size={"sm"}>Edit Profile</Button>
            </div>
            <div className="flex-row w-46 m-3">
                <div className="font-bold">{user.username}</div>
                <div className="mb-3 text-zinc-500">{user.email}</div>
                <div className="flex item-center my-3 text-zinc-500">
                    <CalendarPlus size={"20"} className="mr-2"/>  {user.createdAt}
                </div>
                <div className="flex gap-2 my-3 text-foreground">
                    <div className="flex-1">
                        <div className="flex items-center gap-1">
                            <span>{user.followingCount}</span>
                            <span className="text-zinc-500">Following</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-1">
                            <span>{user.followerCount}</span>
                            <span className="text-zinc-500">Followers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}