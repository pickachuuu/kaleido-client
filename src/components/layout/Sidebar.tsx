'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { sidebarNavItems } from "@/config/sidebar-cfg"

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 h-full bg-background p-4">
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
                                <img 
                                    src={item.icon} 
                                    alt="" 
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                />
                            )}
                            <span className='text-xl'>{item.title}</span>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}