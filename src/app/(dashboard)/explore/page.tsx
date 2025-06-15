'use client'
import StickyContainer from "@/components/ui/StickyContainer"
import Header from "@/components/ui/Header"
import SearchBar from "@/components/ui/SearchBar"
import NavButtonContainer from "@/components/layout/NavButtonContainer"
import NavButton from "@/components/ui/NavButton"
import { useState } from "react"

export default function ExplorePage() {
    const [activeTab, setActiveTab] = useState<'For you'| 'Trending' | 'News' | 'Sports'| 'Entertainment' >('For you')

    return (
        <div>
            <StickyContainer variant={"solid"}>
                <Header className="px-5 py-1">
                    <SearchBar/>
                </Header>
                <NavButtonContainer>
                    <NavButton active={activeTab === 'For you'}>For you</NavButton>
                    <NavButton active={activeTab === 'Trending'}>Trending</NavButton>
                    <NavButton active={activeTab === 'News'}>News</NavButton>
                    <NavButton active={activeTab === 'Sports'}>Sports</NavButton>
                    <NavButton active={activeTab === 'Entertainment'}>Entertainment</NavButton>
                </NavButtonContainer>
            </StickyContainer>
        </div>
    )
}
