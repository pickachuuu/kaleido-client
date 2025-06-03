import { LucideIcon } from "lucide-react";

export interface SideBarItem {
    title: string;
    href: string;
    icon?: LucideIcon; 
    children?: SideBarItem[]; 
}