import { SideBarItem } from '@/types/nav-types';
import { Home, Hash, Bell, Mail, Bookmark, User, Settings } from 'lucide-react'

export const sidebarNavItems: SideBarItem[] = [
  {
    title: 'Home',
    href: '/home',
    icon: Home
  },
  {
    title: 'Explore',
    href: '/explore',
    icon: Hash
  },
  {
    title: 'Notifications',
    href: '/notifications',
    icon: Bell
  },
  {
    title: 'Messages',
    href: '/messages',
    icon: Mail
  },
  {
    title: 'Bookmarks',
    href: '/bookmarks',
    icon: Bookmark
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: User
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings
  },
];

export const dropdownItems: any = {

}