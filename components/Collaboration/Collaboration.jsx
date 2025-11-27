import Image from "next/image";
import styles from "./Collaboration.module.css";

export default function Collaboration() {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>In Collaboration with</h3>

            <div className={styles.content}>
                <div className={styles.mascotWrapper}>
                    {/* Placeholder for mascot */}
                    <svg viewBox="0 0 100 100" className={styles.mascotImage}>
                        <rect x="10" y="10" width="80" height="80" rx="20" fill="#FD7E14" />
                        <circle cx="35" cy="40" r="5" fill="white" />
                        <circle cx="65" cy="40" r="5" fill="white" />
                        <path d="M 30 60 Q 50 70 70 60" stroke="white" strokeWidth="3" fill="none" />
                    </svg>
                </div>

                <div className={styles.info}>
                    <div className={styles.flexiLogo}>Flexi</div>
                    <span className={styles.studentTutor}>STUDENT TUTOR</span>
                    <p className={styles.description}>World&apos;s Most Powerful AI Tutor</p>
                    <div className={styles.ckLogo}>ck-12</div>
                </div>
            </div>
        </section>
    );
}
