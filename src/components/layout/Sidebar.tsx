'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { sidebarNavItems } from "@/config/sidebar-cfg"
import { Button } from '@/components/ui/Button'
import { CircleEllipsis } from 'lucide-react'


export default function Sidebar() {
    const pathname = usePathname()
    return (
        <aside className="w-64 h-full p-4 flex items-center justify-center">
            <nav className="space-y-2">
                {sidebarNavItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                                isActive 
                                    ? 'bg-secondary text-secondary-foreground' 
                                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                            )}
                        >
                            {item.icon && (
                                <item.icon color='#ffffff'
                                />
                            )}
                            <span className='text-xl'>{item.title}</span>
                        </Link>
                    )
                })}

                {/* More Button */}

                <div className='flex items-center gap-3 px-3 py-2 text-sm'>
                    <CircleEllipsis color='#ffffff'/>
                    <span className='text-xl'>More</span>
                </div>
                
                {/* Post Button */}
                <Button className="w-full my-2 font-bold text-black" size={'lg'}>
                    Create Post
                </Button>

            </nav>
        </aside>
    )
}




