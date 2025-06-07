'use client';

import NavButton from "@/components/ui/NavButton";
import NavButtonContainer from "@/components/layout/NavButtonContainer";
import ForYouFeed from "@/components/feeds/ForYouFeed";
import FollowingFeed from "@/components/feeds/FollowingFeed";

import { useState } from "react";

export default function Home(){
    const [activeTab, setActiveTab] = useState("following")

    return (
        <div>
            <NavButtonContainer>
                <NavButton>
                    For you
                </NavButton>
                <NavButton>
                    Following
                </NavButton>

                {/* {activeTab == 'following'} */}
                
            </NavButtonContainer>
            Testing
        </div>
    )
}