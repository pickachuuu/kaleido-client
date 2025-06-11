'use client';
import Header from "@/components/ui/Header"
import ProfileBanner from "@/components/ui/ProfileBanner"
import ProfileAvatar from "@/components/ui/ProfileAvatar"
import StickyContainer from "@/components/ui/StickyContainer"
import { Button } from "@/components/ui/Button"
import { CalendarPlus } from "phosphor-react"

export default function ProfilePage() {
    return (
        <div>
            <StickyContainer>
                <Header>
                    Profile
                </Header>
            </StickyContainer>

            <ProfileBanner/>
            <div className="flex w-full max-h-20 justify-between px-4 py-2">
                <ProfileAvatar/>
                <Button variant={"outline"} size={"sm"}>Edit Profile</Button>
            </div>
            <div className="flex-row w-46 m-3">
                <div className="font-bold">Pika</div>
                <div className="mb-3 text-zinc-500">@ZygPika</div>
                <div className="flex item-center my-3 text-zinc-500">
                    <CalendarPlus size={"20"} className="mr-2"/>  Joined October 2021
                </div>
                <div className="flex my-3 text-zinc-500">
                    <div className="flex-1">
                        Following
                    </div>
                    <div className="flex-1">
                        Followers
                    </div>
                </div>
            </div>


        </div>
    )
}