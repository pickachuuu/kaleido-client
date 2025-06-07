'use client';

import { useState } from "react";
import TransparentHeader from "@/components/ui/Header";
import NavButtonContainer from "@/components/layout/NavButtonContainer";
import NavButton from "@/components/ui/NavButton";
import AllNotifs from "@/components/notification/AllNotifs";
import VerifiedNotifs from "@/components/notification/VerifiedNotifs";
import MentionNotifs from "@/components/notification/MentionNotifs";
import ScrollableContent from "@/components/ui/ScrollableContent";
import StickyContainer from "@/components/ui/StickyContainer";

export default function NotificationsPage() {
    const [activeTab, setActiveTab] = useState<'all' | 'verified' | 'mentions'>('all');

    return (
        <div>

                {/* Header Section   */}
                <StickyContainer>   
                    <TransparentHeader>
                        Notifications
                    </TransparentHeader>
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