import StickyContainer from "@/components/ui/StickyContainer"
import Header from "@/components/ui/Header"
import SearchBar from "@/components/ui/SearchBar"
import NavButtonContainer from "@/components/layout/NavButtonContainer"
import NavButton from "@/components/ui/NavButton"

export default function ExplorePage() {
    return (
        <div>
            <StickyContainer variant={"solid"}>
                <Header className="px-5 py-1">
                    <SearchBar/>
                </Header>
                <NavButtonContainer>
                    <NavButton>For you</NavButton>
                    <NavButton>Trending</NavButton>
                    <NavButton>News</NavButton>
                    <NavButton>Sports</NavButton>
                    <NavButton>Entertainment</NavButton>
                </NavButtonContainer>
            </StickyContainer>
        </div>
    )
}
