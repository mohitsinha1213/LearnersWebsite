import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.logoColumn}>
                    <Link href="/" className={styles.logo}>
                        {/* Placeholder Logo */}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 8L24 24H8L16 8Z"
                                fill="#0D6EFD"
                                stroke="#0D6EFD"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Learners Global School
                    </Link>
                    <p className={styles.description}>
                        The best education for your children. We provide a nurturing environment for holistic development.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon}>f</a>
                        <a href="#" className={styles.socialIcon}>t</a>
                        <a href="#" className={styles.socialIcon}>in</a>
                        <a href="#" className={styles.socialIcon}>ig</a>
                    </div>
                </div>

                <div>
                    <h4 className={styles.columnTitle}>Quick Links</h4>
                    <div className={styles.links}>
                        <Link href="#" className={styles.link}>About Us</Link>
                        <Link href="#" className={styles.link}>Admissions</Link>
                        <Link href="#" className={styles.link}>Academics</Link>
                        <Link href="#" className={styles.link}>Facilities</Link>
                        <Link href="#" className={styles.link}>Contact</Link>
                    </div>
                </div>

                <div>
                    <h4 className={styles.columnTitle}>Contact Us</h4>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <span>📍</span>
                            <span>123 School Lane, Education City, India</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span>📞</span>
                            <span>+91 98765 43210</span>
                        </div>
                        <div className={styles.contactItem}>
                            <span>✉️</span>
                            <span>info@learners.edu.in</span>
                        </div>
                    </div>
                </div>

                <div className={styles.newsletter}>
                    <h4 className={styles.columnTitle}>Newsletter</h4>
                    <p>Subscribe to get updates on events and news.</p>
                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Your Email" className={styles.input} />
                        <button className={styles.submitBtn}>➤</button>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <p>© 2024 Learners Global School. All rights reserved.</p>
                <div className={styles.bottomLinks}>
                    <Link href="#" className={styles.link}>Privacy Policy</Link>
                    <Link href="#" className={styles.link}>Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
