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
                    <NavButton 
                    onClick={()=>{setActiveTab('For you')}}
                    active={activeTab === 'For you'}>For you</NavButton>
                    <NavButton 
                    onClick={()=>{setActiveTab('Trending')}}
                    active={activeTab === 'Trending'}>Trending</NavButton>
                    <NavButton 
                    onClick={()=>{setActiveTab('News')}}
                    active={activeTab === 'News'}>News</NavButton>
                    <NavButton 
                    onClick={()=>{setActiveTab('Sports')}}
                    active={activeTab === 'Sports'}>Sports</NavButton>
                    <NavButton 
                    onClick={()=>{setActiveTab('Entertainment')}}
                    active={activeTab === 'Entertainment'}>Entertainment</NavButton>
                </NavButtonContainer>
            </StickyContainer>


            <div>
                {(()=>{
                    switch (activeTab){
                        case 'For you':
                            return <>Test</>
                        case 'Trending':
                            return <>Trending</>
                        default:
                            return <>Default</>
                    }
                })()}
            </div>

        </div>
    )
}
