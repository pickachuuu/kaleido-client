'use client';

import Header from "@/components/ui/Header"
import StickyContainer from "@/components/ui/StickyContainer"
import ProfileOverview from "@/components/layout/ProfileOverview";
import NavButtonContainer from "@/components/layout/NavButtonContainer";
import NavButton from "@/components/ui/NavButton";
import { use } from 'react'

interface ProfilePageProps {
    params: Promise <{
        username: string;
    }>
}

export default function ProfilePage({params}: ProfilePageProps) {
    const { username } = use(params);

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