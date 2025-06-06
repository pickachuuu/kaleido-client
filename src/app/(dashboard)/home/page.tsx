import NavButton from "@/components/ui/NavButton";
import NavButtonContainer from "@/components/layout/NavButtonContainer";
export default function Home(){
    return (
        <div >
            <NavButtonContainer>
                <NavButton>
                    For you
                </NavButton>
                <NavButton>
                    Following
                </NavButton>
            </NavButtonContainer>
        </div>
    )
}