import Image from "next/image";
import styles from "./Achievers.module.css";

const achievers = [
    {
        name: "Ashika Roy",
        desc: "Learners Global School helped me achieve my dreams with their excellent guidance.",
        image: "/images/achiever_girl.png",
        bgClass: styles.blueCard,
        linkText: "View success result",
    },
    {
        name: "Mohit Sinha",
        desc: "The teachers here are very supportive and the environment is great for learning.",
        image: "/images/achiever_boy.png",
        bgClass: styles.greenCard,
        linkText: "View success stories",
    },
    // Adding more dummy data to make the scroll look better
    {
        name: "Priya Sharma",
        desc: "State level debate champion. The public speaking club was a game changer.",
        image: "/images/achiever_girl.png", // Reusing image
        bgClass: styles.blueCard,
        linkText: "Watch debate",
    },
    {
        name: "Rahul Verma",
        desc: "Scored 99% in Mathematics. Thanks to the dedicated faculty.",
        image: "/images/achiever_boy.png", // Reusing image
        bgClass: styles.greenCard,
        linkText: "See marksheet",
    },
];

export default function Achievers() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Notable Achievers</h2>
            </div>

            <div className={styles.scrollContainer}>
                {/* Duplicate content for infinite scroll effect */}
                <div className={styles.track}>
                    {[...achievers, ...achievers, ...achievers].map((student, index) => (
                        <div key={index} className={`${styles.card} ${student.bgClass}`}>
                            <div className={styles.content}>
                                <h3 className={styles.name}>{student.name}</h3>
                                <p className={styles.description}>&quot;{student.desc}&quot;</p>
                                <button className={styles.button}>{student.linkText} <span>▶</span></button>
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    width={200}
                                    height={250}
                                    className={styles.studentImage}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
