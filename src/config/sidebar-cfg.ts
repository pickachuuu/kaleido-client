import { SideBarItem } from '@/types/nav-types';
import { House, Binoculars, Bell, ChatCenteredText, User } from 'phosphor-react'

export const sidebarNavItems: SideBarItem[] = [
  {
    title: 'Home',
    href: '/home',
    icon: House
  },
  {
    title: 'Explore',
    href: '/explore',
    icon: Binoculars
  },
  {
    title: 'Notifications',
    href: '/notifications',
    icon: Bell
  },
{
    title: 'Messages',
    href: '/messages',
    icon: ChatCenteredText
  },
  {
    title: 'Profile',
    href: '/profile',
    icon: User
  },
];