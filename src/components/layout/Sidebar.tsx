'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { sidebarNavItems } from "@/config/sidebar-cfg"
import { Button } from '@/components/ui/Button'
import { DotsThreeCircle } from 'phosphor-react'


export default function Sidebar() {
    const pathname = usePathname()
    return (
        <aside className="w-64 h-full p-4 flex items-center justify-center">
            <nav className="space-y-2 w-48">
                {sidebarNavItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'flex items-center gap-3 rounded-3xl px-3 py-2 text-sm transition-colors hover:bg-zinc-900',
                                isActive ? 'font-semibold' : 'font-light',
                            )}
                                                >
                            {item.icon && (
                                <item.icon
                                    size={32}
                                    weight={isActive ? 'fill' : 'regular'}
                                />
                            )}
                            <span className='text-lg'>{item.title}</span>
                        </Link>
                    )
                })}

                {/* More Button */}
                <div className='flex items-center gap-3 px-3 py-2 text-sm cursor-pointer hover:bg-zinc-900 rounded-3xl'>
                    <DotsThreeCircle size={32} color='#ffffff'/>
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




