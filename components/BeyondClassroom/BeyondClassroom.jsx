import Image from "next/image";
import styles from "./BeyondClassroom.module.css";

export default function BeyondClassroom() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Beyond the classroom</h2>
            </div>

            <div className={styles.grid}>
                {/* Grounds */}
                <div className={`${styles.card} ${styles.grounds}`}>
                    <Image
                        src="/images/classroom_bg.png" // Placeholder
                        alt="World-Class Grounds"
                        fill
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <h3 className={styles.cardTitle}>World-Class Grounds</h3>
                    </div>
                </div>

                {/* Library */}
                <div className={`${styles.card} ${styles.library}`}>
                    <Image
                        src="/images/classroom_bg.png" // Placeholder
                        alt="Library"
                        fill
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <h3 className={styles.cardTitle}>Library</h3>
                    </div>
                </div>

                {/* Smart Classrooms */}
                <div className={`${styles.card} ${styles.smartClass}`}>
                    <Image
                        src="/images/classroom_bg.png" // Placeholder
                        alt="Smart Classrooms"
                        fill
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <h3 className={styles.cardTitle}>Smart Classrooms</h3>
                    </div>
                </div>

                {/* Clubs */}
                <div className={`${styles.card} ${styles.clubs} ${styles.clubCard}`}>
                    <div className={styles.clubContent}>
                        <h3 className={styles.cardTitle}>Clubs and Societies</h3>
                        <div className={styles.clubList}>
                            <span className={styles.clubItem}>Math Club</span>
                            <span className={styles.clubItem}>Science Club</span>
                            <span className={styles.clubItem}>English Club</span>
                        </div>
                    </div>
                    <div className={styles.clubImageWrapper}>
                        <Image
                            src="/images/student_methodology.png" // Placeholder
                            alt="Clubs"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Stem Labs */}
                <div className={`${styles.card} ${styles.stemLabs}`}>
                    <Image
                        src="/images/classroom_bg.png" // Placeholder
                        alt="Stem Labs"
                        fill
                        className={styles.image}
                    />
                    <div className={styles.overlay}>
                        <h3 className={styles.cardTitle}>Stem Labs</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
