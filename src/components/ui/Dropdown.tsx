export interface DropdownProps {
    items: string[];
}

interface DropDownProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export default function Dropdown({ items }: DropdownProps) {

}    