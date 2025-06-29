import LayoutContainer from "@/components/layout/LayoutContainer"
import MainLayout from "@/components/layout/MainLayout"
import StickyPanel from "@/components/layout/StickyPanel"
import Header from "@/components/ui/Header"
import StickyContainer from "@/components/ui/StickyContainer"
import SearchBar from "@/components/ui/SearchBar"
import ScrollableContent from "@/components/ui/ScrollableContent"

export default function NotificationsLayout({ 
    children }: { children: React.ReactNode 
    }){
        return (
            <LayoutContainer>
                <MainLayout>
                    {children}
                </MainLayout>
            </LayoutContainer>
        )
    }