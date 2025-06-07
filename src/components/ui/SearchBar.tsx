'use client'
import { MagnifyingGlass } from 'phosphor-react'


export default function SearchBar() {
    return (
        <div className="rounded-3xl border-1 border-zinc-700 flex items-center p-2 text-xs w-full">
            <MagnifyingGlass size={20}/> 
            Search
        </div>
    )
}