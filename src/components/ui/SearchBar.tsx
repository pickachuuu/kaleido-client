'use client'
import { MagnifyingGlass } from 'phosphor-react'


export default function SearchBar() {
    return (
        <div className="relative">
            <MagnifyingGlass className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
            <input
                type="text"
                placeholder="Search Kaleido"
                className="pl-12 bg-white/5 backdrop-blur-sm border-white/10 text-white placeholder:text-gray-400 rounded-full h-10 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 text-sm font-normal"
            />
        </div>
    )
}