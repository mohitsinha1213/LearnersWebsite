"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                {/* Placeholder for Logo Icon */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="16" cy="16" r="16" fill="#0D6EFD" fillOpacity="0.1" />
                    <path
                        d="M16 8L24 24H8L16 8Z"
                        fill="#0D6EFD"
                        stroke="#0D6EFD"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                </svg>
                <span>Learners Global School</span>
            </Link>

            <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                <Link href="#about" className={styles.navLink}>
                    About
                </Link>
                <Link href="#courses" className={styles.navLink}>
                    Courses
                </Link>
                <Link href="#facilities" className={styles.navLink}>
                    Facilities
                </Link>
                <Link href="#contact" className={styles.navLink}>
                    Contact
                </Link>
            </nav>

            <div className={styles.actions}>
                <Link href="/login" className={styles.login}>
                    Login
                </Link>
                <button className={styles.enquireBtn}>Enquire Now</button>
            </div>

            <button
                className={styles.mobileToggle}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                ☰
            </button>
        </header>
    );
}
