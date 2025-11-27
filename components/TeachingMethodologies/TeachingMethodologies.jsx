import Image from "next/image";
import styles from "./TeachingMethodologies.module.css";

const methodologies = [
    {
        title: "5W1H Framework",
        desc: "Why, What, Where, When, Who, How - questioning based approach.",
        icon: "❓",
        colorClass: styles.blueIcon,
    },
    {
        title: "Mind Mapping",
        desc: "Visualizing concepts to enhance memory and understanding.",
        icon: "🧠",
        colorClass: styles.orangeIcon,
    },
    {
        title: "Hybrid Learning",
        desc: "Seamlessly blending physical classroom with digital resources.",
        icon: "💻",
        colorClass: styles.greenIcon,
    },
    {
        title: "Learn Technology",
        desc: "Mastering tools & software necessary for modern management.",
        icon: "⚙️",
        colorClass: styles.purpleIcon,
    },
];

export default function TeachingMethodologies() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Learner&apos;s Teaching Methodologies</h2>
            </div>

            <div className={styles.content}>
                <div className={styles.methodsGrid}>
                    {methodologies.map((method, index) => (
                        <div key={index} className={styles.methodItem}>
                            <div className={`${styles.iconWrapper} ${method.colorClass}`}>
                                {method.icon}
                            </div>
                            <div className={styles.methodContent}>
                                <h3 className={styles.methodTitle}>{method.title}</h3>
                                <p className={styles.methodDesc}>{method.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.imageContainer}>
                    <div className={styles.bgShape}></div>
                    <Image
                        src="/images/student_methodology.png"
                        alt="Student Learning"
                        width={400}
                        height={500}
                        className={styles.studentImage}
                    />
                </div>
            </div>
        </section>
    );
}
