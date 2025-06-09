import StickyContainer from "@/components/ui/StickyContainer"
import Header from "@/components/ui/Header"
import SearchBar from "@/components/ui/SearchBar"

export default function ExplorePage() {
    return (
        <div>
            <StickyContainer variant={"solid"}>
                <Header variant={"bottomBorder"}>
                    <SearchBar/>
                </Header>
            </StickyContainer>
        </div>
    )
}
