import LayoutContainer from "@/components/layout/LayoutContainer"
import MainLayout from "@/components/layout/MainLayout"
import StickyPanel from "@/components/layout/StickyPanel"
import AllNotifs from "@/components/notification/AllNotifs"

export default function NotificationsLayout({ 
    children }: { children: React.ReactNode 
    }){
        return (
            <div>
                <LayoutContainer>
                    <MainLayout>
                        {children}
                    </MainLayout>

                    <StickyPanel>
                        wie wie
                    </StickyPanel>
                </LayoutContainer>
            </div>
        )
    }