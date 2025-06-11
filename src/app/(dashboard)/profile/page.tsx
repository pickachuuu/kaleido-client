'use client';
import Header from "@/components/ui/Header"
import StickyContainer from "@/components/ui/StickyContainer"
import ProfileOverview from "@/components/layout/ProfileOverview";
import NavButtonContainer from "@/components/layout/NavButtonContainer";
import NavButton from "@/components/ui/NavButton";

export default function ProfilePage() {
    return (
        <div>
            <StickyContainer>
                <Header>
                    Profile
                </Header>
            </StickyContainer>
            <ProfileOverview/>
            <NavButtonContainer>
                <NavButton>
                    Post
                </NavButton>
                <NavButton>
                    Replies
                </NavButton>
                <NavButton>
                    Likes
                </NavButton>
            </NavButtonContainer>
            
        </div>
    )
}