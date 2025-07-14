'use client';
import { createContext, useContext, useRef, useState, useEffect,  } from "react";

type DropdownContextType = {
    open:boolean;
    setOpen: (value: boolean) => void;
    triggerRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

export function Dropdown({children}: {children: React.ReactNode}){
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        function handleClickOutside(e: MouseEvent) {
            if (
                contentRef.current && 
                !contentRef.current.contains(e.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(e.target as Node)
            ) {
                setOpen(false)
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    return (
        <DropdownContext.Provider
        value={{
            open,
            setOpen,
            triggerRef: triggerRef as React.RefObject<HTMLDivElement>,
            contentRef: contentRef as React.RefObject<HTMLDivElement>
        }}
        >
            {children}
        </DropdownContext.Provider>
    )
}

export function DropdownTrigger({ children }: { children: React.ReactNode}){
    const context = useContext(DropdownContext)
    if (!context) throw new Error("DropdownTrigger must be inside a dropdown component")
    const { setOpen, open, triggerRef} = context

    return (
        <div 
        ref={triggerRef}
        onClick={()=>{setOpen(!open)}}      
        className="relative"
        >
            {children}
        </div>
    )
}

export function DropdownContent({ children }: {children: React.ReactNode}){
    const context = useContext(DropdownContext)
    if(!context) throw new Error("DropdownContent must be inside a dropdown component")
    const { open, setOpen, contentRef } = context

    if (!open) return null

    return (
        <div 
        ref={contentRef}
        className="absolute translate-y-180 z-50 min-w-72 w-auto rounded-lg shadow-[0_0_9px_0.5px] bg-background shadow-white/30">
            {children}
        </div>
    )
}

export function DropdownItem({children}: {children: React.ReactNode}){
    const context = useContext(DropdownContext)
    if(!context) throw new Error("DropdownContent must be inside a dropdown component")
    const { open, setOpen, contentRef } = context

    return (
        <div
        onClick={()=>{setOpen(!open)}}
        >
            {children}
        </div>
    )
}