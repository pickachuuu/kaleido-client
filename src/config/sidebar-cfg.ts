import { SideBarItem } from '@/types/nav-types';
import { House, Search, Bell, Mail, User } from 'lucide-react';

export const sidebarNavItems: SideBarItem[] = [
  {
    title: 'Home',
    href: '/home',
    icon: House
  },
  {
    title: 'Explore',
    href: '/explore',
    icon: Search
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
    title: 'Profile',
    href: '/profile',
    icon: User
  },
];