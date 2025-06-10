import Header from "@/components/ui/Header"
import ProfileBanner from "@/components/ui/ProfileBanner"
import ProfileAvatar from "@/components/ui/ProfileAvatar"
import StickyContainer from "@/components/ui/StickyContainer"
import { Button } from "@/components/ui/Button"

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
            <div className="flex-row w-46">
                <div>Pika</div>
                <div>@ZygPika</div>
                <div>Joined May 9 2018</div>
                <div className="flex">
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