import { SideBarItem } from '@/types/nav-types';
import { House, Binoculars, Bell, ChatCenteredText, User, DotsThreeCircle, Gear } from 'phosphor-react'

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
  {
    title: 'Settings',
    href: '/settings',
    icon: Gear
  },
  // {
  //   title: 'More',
  //   href: '',
  //   icon: DotsThreeCircle,
  //   children: [
  //     {
  //       title: "test",
  //       href: '/test',
  //       icon: Binoculars
  //     },
  //     {
  //       title: "test",
  //       href: '/test',
  //       icon: Binoculars
  //     },
  //     {
  //       title: "test",
  //       href: '/test',
  //       icon: Binoculars
  //     },
  //   ]
  // }
];

export const dropdownItems: any = {

}