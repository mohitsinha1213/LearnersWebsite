import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.badge}>Admission Open 2024-25</span>
                <h1 className={styles.title}>
                    Shaping Future <br />
                    <span className={styles.highlight}>Leaders</span> of India
                </h1>
                <p className={styles.description}>
                    Learners Global School focuses on building strong values and discipline
                    in a conducive environment that encourages students to explore their
                    potential and achieve excellence in all walks of life.
                </p>

                <div className={styles.stats}>
                    <div className={styles.statItem}>
                        <span className={`${styles.statIcon} ${styles.greenDot}`}></span>
                        CBSE Affiliated
                    </div>
                    <div className={styles.statItem}>
                        <span className={`${styles.statIcon} ${styles.greenDot}`}></span>
                        1:15 Teacher Student Ratio
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button className={styles.primaryBtn}>Admission Process</button>
                    <button className={styles.secondaryBtn}>
                        Virtual Tour <span>▶</span>
                    </button>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <div className={`${styles.bgShape} ${styles.purpleShape}`}></div>
                <div className={`${styles.bgShape} ${styles.greenShape}`}></div>
                <Image
                    src="/images/hero_students.png"
                    alt="Happy Students"
                    width={600}
                    height={500}
                    className={styles.heroImage}
                    priority
                />
            </div>
        </section>
    );
}