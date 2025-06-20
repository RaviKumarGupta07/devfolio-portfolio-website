"use client"
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/solid'; import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuItems = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Projects' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-gray-200
         dark:border-gray-700 shadow-sm transition-colors">
            <div className="container max-w-7xl mx-auto px-4">

                {/* {desktop menu} */}
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="text-xl font-bold text-primary">
                        Devfolio&trade;
                    </Link>

                    {/* {desktop menus} */}
                    <div className="hidden md:flex items-center space-x-8">
                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link key={item.href}
                                        href={item.href}
                                        className={`hover:text-primary transition-colors font-medium ${isActive ? ' text-primary' : ''}`} >
                                        {item.label} </Link>
                                )
                            })
                        }

                        <button
                            onClick={toggleTheme}
                            className=" p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer">
                            {theme === "dark" ? (
                                <SunIcon className="h-5 w-5" />
                            ) : (
                                <MoonIcon className="h-5 w-5" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu button*/}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden text-primary p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>

                    {/* mobile menu */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-16 left-0 w-full bg-white/90 dark:bg-dark/90 border-b border-gray-300
                         dark:border-gray-700 md:hidden z-50 transition-colors">
                            <div className="py-4 px-4 space-y-4">
                                {menuItems.map((item, index) => (
                                    <div key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="block py-2 text-gray-800 dark:text-white hover:text-primary transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                ))}
                                <div>
                                    <button
                                        onClick={toggleTheme}
                                        className=" flex py-2 text-gray-800 dark:text-white hover:text-primary transition-colors">
                                        {theme === "dark" ? (
                                            <> <SunIcon className="h-5 w-5 mr-2" />  Light Mode </> ) : 
                                            ( <>  <MoonIcon className="h-5 w-5 mr-2" /> Dark Mode </> )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>

    )
}

