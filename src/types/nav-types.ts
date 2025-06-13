import { IconProps }  from "phosphor-react";

export interface SideBarItem {
    title: string;
    href: string;
    icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
    children?: SideBarItem[]; 
}