import Link from "next/link";
import styles from "./AcademicStreams.module.css";

const streams = [
    {
        title: "Pre-Primary",
        subtitle: "Nursery to UKG",
        description: "Play-based learning.",
        icon: "⭐",
        colorClass: styles.orangeIcon,
    },
    {
        title: "Primary",
        subtitle: "Classes 1–5",
        description: "Strong academic foundation.",
        icon: "📘",
        colorClass: styles.blueIcon,
    },
    {
        title: "Middle School",
        subtitle: "Classes 6–8",
        description: "Concept clarity & skills.",
        icon: "👥",
        colorClass: styles.greenIcon,
    },
    {
        title: "High School",
        subtitle: "Classes 9–12",
        description: "Board exam preparation.",
        icon: "🎓",
        colorClass: styles.purpleIcon,
    },
];

export default function AcademicStreams() {
    return (
        <section id="courses-section" className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Academic Streams</h2>
                <p className={styles.subtitle}>Nurturing every child from early learning to high school.</p>
            </div>

            <div className={styles.gridContainer}>
                {streams.map((stream, index) => (
                    <div key={index} className={styles.card}>
                        <div className={`${styles.iconWrapper} ${stream.colorClass}`}>
                            {stream.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{stream.title}</h3>
                        <p className={styles.cardText}>
                            <strong>{stream.subtitle}</strong> · {stream.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className={styles.buttonContainer}>
                <Link href="/courses" className={styles.exploreButton}>
                    Explore Full Curriculum →
                </Link>
            </div>
        </section>
    );
}
