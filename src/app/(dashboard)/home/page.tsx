'use client';

import NavButton from "@/components/ui/NavButton";
import NavButtonContainer from "@/components/layout/NavButtonContainer";
import ForYouFeed from "@/components/feeds/ForYouFeed";
import FollowingFeed from "@/components/feeds/FollowingFeed";
import { useState } from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState<'foryou' | 'following'>('foryou');

    return (
        <div>
            <NavButtonContainer>
                <NavButton 
                    onClick={() => setActiveTab('foryou')}
                    active={activeTab === 'foryou'}
                >
                    For you
                </NavButton>
                <NavButton 
                    onClick={() => setActiveTab('following')}
                    active={activeTab === 'following'}
                >
                    Following
                </NavButton>
            </NavButtonContainer>

            {/* Feed Content */}
            <div className="mt-4">
                {activeTab === 'foryou' ? (
                    <ForYouFeed />
                ) : (
                    <FollowingFeed />
                )}
            </div>
        </div>
    )
}