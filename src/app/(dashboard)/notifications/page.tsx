import TransparentHeader from "@/components/ui/TransparentHeader"
import NavButtonContainer from "@/components/layout/NavButtonContainer"
import NavButton from "@/components/ui/NavButton"
import AllNotifs from "@/components/notification/AllNotifs"

export default function NotificationsPage() {
    return (
        <div>
            <TransparentHeader>
                Notifications
            </TransparentHeader>
            <NavButtonContainer variant={"three"}>
                <NavButton>
                    All
                </NavButton>
                <NavButton>
                    Verified
                </NavButton>
                <NavButton>
                    Mentions
                </NavButton>
            </NavButtonContainer>

            <AllNotifs/>

        </div>
    )
}