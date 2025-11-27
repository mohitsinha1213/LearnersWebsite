import styles from "./Houses.module.css";

const houses = [
    {
        name: "Krishna House",
        motto: '"Flow with Wisdom"',
        description: "Spiritual growth, creativity, and the eternal flow of knowledge.",
        icon: "🌊", // Waves
        bgClass: styles.krishnaBg,
    },
    {
        name: "Kavery House",
        motto: '"Nurture & Flourish"',
        description: "Cultural heritage, artistic expression, and nurturing traditions.",
        icon: "🍃", // Leaf
        bgClass: styles.kaveryBg,
    },
    {
        name: "Kapila House",
        motto: '"Seek Higher Truth"',
        description: "Philosophy, meditation, and the pursuit of eternal wisdom.",
        icon: "⛰️", // Mountain/Triangle
        bgClass: styles.kapilaBg,
    },
    {
        name: "Kabini House",
        motto: '"Strength in Unity"',
        description: "Environmental stewardship, wildlife conservation, and natural harmony.",
        icon: "🐘", // Elephant/Nature
        bgClass: styles.kabiniBg,
    },
];

export default function Houses() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Vibrant Houses & Clubs</h2>
            <div className={styles.grid}>
                {houses.map((house, index) => (
                    <div key={index} className={`${styles.card} ${house.bgClass}`}>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <div className={styles.iconWrapper}>
                                    <span className={styles.icon}>{house.icon}</span>
                                </div>
                                <div>
                                    <h3 className={styles.houseName}>{house.name}</h3>
                                    <span className={styles.motto}>{house.motto}</span>
                                </div>
                            </div>
                            <p className={styles.description}>{house.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
