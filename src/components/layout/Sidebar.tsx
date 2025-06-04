'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { sidebarNavItems } from "@/config/sidebar-cfg"
import { Button } from '@/components/ui/Button'
import { DotsThreeCircle, PlusCircle } from 'phosphor-react'
import { Plus } from 'lucide-react'


export default function Sidebar() {
    const pathname = usePathname()
    return (
        <aside className="w-16 md:w-64 h-full p-4 flex items-center justify-center transition-all duration-300">
            <nav className="space-y-2 w-auto sm:w-48">
                {sidebarNavItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'flex items-center justify-center sm:justify-start gap-3 rounded-3xl px-3 py-2 transition-colors hover:bg-zinc-900',
                                isActive ? 'font-semibold' : 'font-light',
                            )}
                        >
                            {item.icon && (
                                <item.icon
                                    size={32}
                                    weight={isActive ? 'fill' : 'regular'}
                                />
                            )}
                            <span className="hidden md:inline text-xl sm:hidden">{item.title}</span>
                        </Link>
                    )
                })}

                {/* More Button */}
                <div className="flex items-center justify-center sm:justify-start gap-3 px-3 py-2 cursor-pointer hover:bg-zinc-900 rounded-3xl">
                    <DotsThreeCircle size={32} color="#ffffff"/>
                    <span className="hidden md:inline text-xl">More</span>
                </div>
                
                {/* Post Button */}
                <div className='flex justify-center'>
                    <Button className="hidden md:block 
                    rounded-full md:rounded-2xl my-2 font-bold text-black aspect-square sm:aspect-auto" size={'lg'}>
                        <span className="hidden md:inline text-xl">Create Post</span>
                    </Button>

                    <button className='md:hidden' onClick={() => alert('Create Post')}>
                        <PlusCircle size={42} weight='fill'/>
                    </button>
                </div>
            </nav>
        </aside>
    )
}




