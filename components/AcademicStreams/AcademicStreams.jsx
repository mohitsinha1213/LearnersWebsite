import Image from "next/image";
import styles from "./AcademicStreams.module.css";

const streams = [
    {
        title: "Primary",
        subtitle: "Classes I to V",
        icon: "📘", // Placeholder
        colorClass: styles.blueIcon,
    },
    {
        title: "Pre-Primary",
        subtitle: "Nursery to UKG",
        icon: "⭐", // Placeholder
        colorClass: styles.orangeIcon,
    },
    {
        title: "Middle",
        subtitle: "Classes VI to VIII",
        icon: "👥", // Placeholder
        colorClass: styles.greenIcon,
    },
    {
        title: "High",
        subtitle: "Classes IX to XII",
        icon: "🎓", // Placeholder
        colorClass: styles.purpleIcon,
    },
];

export default function AcademicStreams() {
    return (
        <section className={styles.section}>
            <Image
                src="/images/classroom_bg.png"
                alt="Classroom Background"
                fill
                className={styles.bgImage}
            />
            <div className={styles.overlay}></div>

            <div className={styles.header}>
                <h2 className={styles.title}>Academic Streams</h2>
            </div>

            <div className={styles.cardsContainer}>
                {streams.map((stream, index) => (
                    <div key={index} className={styles.card}>
                        <div className={`${styles.iconWrapper} ${stream.colorClass}`}>
                            {stream.icon}
                        </div>
                        <div className={styles.cardContent}>
                            <span className={styles.cardTitle}>{stream.title}</span>
                            <span className={styles.cardSubtitle}>{stream.subtitle}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
