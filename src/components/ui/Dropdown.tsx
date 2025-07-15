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
        className=" absolute left-0 bottom-20 mb-2 
      z-100 md:min-w-full
      w-56 rounded-xl border bg-background shadow-xl">
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