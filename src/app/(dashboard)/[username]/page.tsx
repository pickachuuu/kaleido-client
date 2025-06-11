'use client';

import Header from "@/components/ui/Header"
import StickyContainer from "@/components/ui/StickyContainer"
import ProfileOverview from "@/components/layout/ProfileOverview";
import NavButtonContainer from "@/components/layout/NavButtonContainer";
import NavButton from "@/components/ui/NavButton";
import { use, useState } from 'react'

interface ProfilePageProps {
    params: Promise <{
        username: string;
    }>
}

export default function ProfilePage({params}: ProfilePageProps) {
    const { username } = use(params);
    const [activeTab, setActiveTab] = useState<'Post'|'Replies'|'Likes'>('Post')


    return (
        <div>
            <StickyContainer>
                <Header>
                    {username}
                </Header>
            </StickyContainer>
            <ProfileOverview/>
            <NavButtonContainer>
                <NavButton 
                onClick={()=>{setActiveTab('Post')}}
                active={activeTab === 'Post'}>
                    Post
                </NavButton>
                <NavButton
                onClick={()=>{setActiveTab('Replies')}}
                active={activeTab === 'Replies'}>
                    Replies
                </NavButton>
                <NavButton
                onClick={()=>{setActiveTab('Likes')}}
                active={activeTab === 'Likes'}>
                    Likes
                </NavButton>
            </NavButtonContainer>
        </div>
    )
}