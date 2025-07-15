'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { sidebarNavItems } from "@/config/sidebar-cfg"
import { Button } from '@/components/ui/Button'
import { PlusCircle, Menu, X } from 'lucide-react'
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from '../ui/Dropdown'
import Image from 'next/image'
import {
  Sparkles,
  MoreHorizontal,
} from "lucide-react"
import ProfileAvatar from "@/components/ui/ProfileAvatar"

export default function Sidebar() {
    const pathname = usePathname()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isActive = (href: string) => {
        if (href === '/home') {
            return pathname === '/home' || pathname === '/'
        }
        return pathname.startsWith(href)
    }

    if (!mounted) return null

    return (
        <aside className="w-22 md:w-96 flex flex-col h-screen sticky top-0 p-4 border-r border-white/10 backdrop-blur-sm bg-white/5 transition-transform duration-500 ease-out">
            {/* Logo Section */}
            <div className="flex items-center gap-2 mb-8 p-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <Image 
                        src="/images/Logo/kaleido.png" 
                        alt="Kaleido" 
                        width={62} 
                        height={62}
                        className="w-full h-full object-contain"
                    />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent md:block hidden">
                    Kaleido
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2">
                {sidebarNavItems.map((item, index) => {
                    const active = isActive(item.href)
                    return (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-4 px-4 py-3 rounded-xl group relative overflow-hidden transition-all duration-300 ease-out",
                                "md:justify-start justify-center",
                                active
                                    ? "bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 text-white shadow-lg"
                                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                            )}
                            title={item.title}
                        >
                            {/* Icon */}
                            <div className="relative z-10">
                                {item.icon && <item.icon className="w-6 h-6" />}
                            </div>
                            
                            {/* Label - hidden on mobile */}
                            <span className={cn(
                                "text-lg font-medium relative z-10 transition-colors duration-300 md:block hidden",
                                active ? "text-white" : "group-hover:text-white"
                            )}>
                                {item.title}
                            </span>

                            {/* Active indicator - only show on mobile */}
                            {active && (
                                <div className="absolute right-2 w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full md:hidden block" />
                            )}
                        </Link>
                    )
                })}
            </nav>

            {/* Create Post Button */}
            <Button 
                className={cn(
                    "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600",
                    "text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl mt-4",
                    "flex items-center gap-2 transition-all duration-300 ease-out",
                    "md:w-full w-12 h-12 p-0 justify-center"
                )}
                title="Create Post"
            >
                <PlusCircle className="w-5 h-5" />
                <span className="md:block hidden">Create Post</span>
            </Button>
            <div className="relative w-full z-50">
  <Dropdown>
    <DropdownTrigger>
      <div className="hidden md:flex mt-4 items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 group cursor-pointer transition-all duration-300 ease-out">
        <ProfileAvatar variant="chat" profileUrl="/profile/pikaProfile.jpg" />
        <div className="flex-1 min-w-0 md:block hidden">
          <p className="text-white font-medium truncate group-hover:text-pink-300 transition-colors duration-300">
            Derek Berbo
          </p>
          <p className="text-gray-400 text-sm truncate group-hover:text-gray-300 transition-colors duration-300">
            @cdb.test
          </p>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300 md:block hidden" />
      </div>
      <div className='md:hidden flex mt-4'>
        <ProfileAvatar variant="chat" profileUrl="/profile/pikaProfile.jpg" className='h-10 w-10'/>
      </div>
    </DropdownTrigger>
    <DropdownContent>
      <div className='bg-gradient-to-br from-[#2d006e] via-[#0a2540] to-[#1a1a2e] rounded-xl text-bold py-2 font-bold '>
        <DropdownItem>
          <button className='my-1 hover:bg-[#1a1a2e] w-full text-start pl-2'>
          View account settings
          </button>
        </DropdownItem>
        <DropdownItem>
          <button className='my-1 hover:bg-[#1a1a2e] w-full text-start pl-2'>
          Log out @username
          </button>
        </DropdownItem>
      </div>
    </DropdownContent>
  </Dropdown>
</div>

        </aside>
    )
}