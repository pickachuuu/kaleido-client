export interface SideBarItem {
    title: string;
    href: string;
    icon?: string; 
    children?: SideBarItem[]; 
}