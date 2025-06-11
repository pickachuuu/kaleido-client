'use client';
import Header from "@/components/ui/Header"
import StickyContainer from "@/components/ui/StickyContainer"
import ProfileOverview from "@/components/layout/ProfileOverview";

export default function ProfilePage() {
    return (
        <div>
            <StickyContainer>
                <Header>
                    Profile
                </Header>
            </StickyContainer>
            <ProfileOverview/>
            
        </div>
    )
}