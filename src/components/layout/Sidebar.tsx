'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { sidebarNavItems } from "@/config/sidebar-cfg"
import { Button } from '@/components/ui/Button'
import { PlusCircle } from 'phosphor-react'
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from '../ui/Dropdown'
import Image from 'next/image'


export default function Sidebar() {
    const pathname = usePathname()
    return (
        <aside className="w-16 xl:w-64 h-full p-4 flex items-center justify-center transition-all duration-300 bg-[var(--background)]">
            <nav className="space-y-2 w-auto sm:w-48">

                <div className='px-4'>
                    <Image
                    src={'/images/logo/kaleido.png'}
                    alt='KaleidoLogo.png'
                    width={74}
                    height={74}
                    />
                </div>
                      

                {sidebarNavItems.map((item, index) => {
                    const isActive = pathname === item.href

                    return (
                        <div key={index}>
                        {item.children && item.children.length > 0 ? (
                            <Dropdown>
                                <DropdownTrigger>
                                <a
                                    key={item.href}
                                    className={cn(
                                        'flex items-center justify-center sm:justify-start gap-3 rounded-3xl px-3 py-2 transition-colors hover:bg-[var(--highlight)]',
                                    )}
                                >
                                    {item.icon && (
                                        <item.icon
                                            size={32}
                                            weight={isActive ? 'fill' : 'regular'}
                                        />
                                    )}
                                <span className="hidden xl:inline text-xl">{item.title}</span>
                                </a>
                                </DropdownTrigger>
                                
                                <DropdownContent>
                                    <DropdownItem>
                                    { item.children && item.children.map((child, index) => (
                                    <Link
                                        key={index}
                                        href={child.href}
                                        className={cn(
                                            'flex items-center justify-center sm:justify-start gap-3 px-3 py-2 transition-colors hover:bg-[var(--highlight)]',
                                            isActive ? 'font-semibold text-[var(--accent)]' : 'font-light text-[var(--accent-secondary)]',
                                        )}
                                    >
                                        {item.icon && (
                                            <item.icon
                                                size={32}
                                                weight={isActive ? 'fill' : 'regular'}
                                            />
                                        )}
                                        <span className="hidden xl:inline text-xl">{child.title}</span>
                                    </Link>
                                    )) 
                                    
                                    }
                                    </DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                         ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    'flex items-center justify-center sm:justify-start gap-3 rounded-3xl px-3 py-2 transition-colors hover:bg-[var(--highlight)]',
                                    isActive ? 'font-semibold text-[var(--accent)]' : 'font-light text-[var(--accent-secondary)]',
                                )}
                            >
                                {item.icon && (
                                    <item.icon
                                        size={32}
                                        weight={isActive ? 'fill' : 'regular'}
                                    />
                                )}
                                <span className="hidden xl:inline text-xl">{item.title}</span>
                            </Link>
                         )}
                        </div>
                    )
                })}

                {/* Post Button */}
                <       div className='flex justify-center'>
                    <Button onClick={() => alert('Create Post')} className="hidden xl:block rounded-full md:rounded-3xl w-full my-2 font-bold text-[var(--foreground)] aspect-square sm:aspect-auto bg-[var(--accent)] hover:bg-[var(--highlight)]" size={'lg'}>
                        <span className="hidden xl:inline text-lg">Post</span>
                    </Button>

                    <button className='xl:hidden' onClick={() => alert('Create Post')}>
                        <PlusCircle size={42} weight='fill' className='text-[var(--accent)]'/>
                    </button>
                </div>
            </nav>
        </aside>
    )
}