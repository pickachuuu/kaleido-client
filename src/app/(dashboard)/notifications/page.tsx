'use client';

import { useState } from "react";
import NavButtonContainer from "@/components/layout/NavButtonContainer";
import NavButton from "@/components/ui/NavButton";
import AllNotifs from "@/components/notification/AllNotifs";
import VerifiedNotifs from "@/components/notification/VerifiedNotifs";
import MentionNotifs from "@/components/notification/MentionNotifs";
import StickyContainer from "@/components/ui/StickyContainer";
import Header from "@/components/ui/Header";

export default function NotificationsPage() {
    const [activeTab, setActiveTab] = useState<'all' | 'verified' | 'mentions'>('all');

    return (
        <div>
            {/* Header Section   */}
            <StickyContainer>
                <Header className="px-5 py-2">
                Notifications
                </Header>
                <NavButtonContainer variant={"three"}>
                    <NavButton 
                    onClick={()=>{setActiveTab('all')}}
                    active={activeTab === 'all'}>
                        All
                    </NavButton>
                    <NavButton 
                    onClick={()=>{setActiveTab('verified')}}
                    active={activeTab === 'verified'}>
                        Verified
                    </NavButton>
                    <NavButton 
                    onClick={()=>{setActiveTab('mentions')}}
                    active={activeTab === 'mentions'}>
                        Mentions
                    </NavButton>
                </NavButtonContainer>
            </StickyContainer>
            {/* Notifs */}
            <div>
                {(() => { 
                    switch(activeTab){
                        case 'all':
                            return <AllNotifs/>
                        case 'verified':
                            return <VerifiedNotifs/>
                        case 'mentions':
                            return <MentionNotifs/> 
                        default:
                            return <AllNotifs/>
                    }
                })()}
            </div>
        </div>
    )
}