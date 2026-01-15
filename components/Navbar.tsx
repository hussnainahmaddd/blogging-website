"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

// ... inside Navbar component
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

    return (
        <nav className={`${styles.navbar} glass`}>
            <div className="container">
                <div className={styles.inner}>
                    {/* Logo */}
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="NexaWell Logo"
                            width={40}
                            height={40}
                            className={styles.logoImage}
                        />
                        <span className={styles.brandName}>NexaWell</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className={styles.desktopMenu}>
                        <Link href="/" className={isActive('/')}>Home</Link>
                        <Link href="/blog/tech" className={isActive('/blog/tech')}>Tech</Link>
                        <Link href="/blog/health" className={isActive('/blog/health')}>Health</Link>
                        <Link href="/about" className={isActive('/about')}>About</Link>
                    </div>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <button className={styles.iconBtn} aria-label="Search">
                            <Search size={20} />
                        </button>


                        {/* Mobile Toggle */}
                        <button
                            className={styles.mobileToggle}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    <Link href="/" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Home</Link>
                    <Link href="/blog/tech" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Tech</Link>
                    <Link href="/blog/health" onClick={() => setIsOpen(false)} className={styles.mobileLink}>Health</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className={styles.mobileLink}>About</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
