import Image from "next/image";
import styles from "./Mentors.module.css";

const mentors = [
    {
        name: "Mr. Narayan Murthy",
        role: "Founder Infosys",
        image: "/images/mentor_photo.png",
        video: "/images/video_thumbnail.png",
        bgClass: styles.orangeCircle,
    },
    {
        name: "Mr. Narayan Murthy",
        role: "Founder Infosys",
        image: "/images/mentor_photo.png",
        video: "/images/video_thumbnail.png",
        bgClass: styles.blueCircle,
    },
    {
        name: "Mr. Narayan Murthy",
        role: "Founder Infosys",
        image: "/images/mentor_photo.png",
        video: "/images/video_thumbnail.png",
        bgClass: styles.greenCircle,
    },
];

export default function Mentors() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Exposure to Mentors</h2>
            </div>

            <div className={styles.mentorsGrid}>
                {mentors.map((mentor, index) => (
                    <div key={index} className={styles.mentorCard}>
                        <div className={styles.imageWrapper}>
                            <div className={`${styles.bgCircle} ${mentor.bgClass}`}></div>
                            <Image
                                src={mentor.image}
                                alt={mentor.name}
                                width={250}
                                height={250}
                                className={styles.mentorImage}
                            />
                        </div>
                        <h3 className={styles.mentorName}>{mentor.name}</h3>
                        <p className={styles.mentorRole}>{mentor.role}</p>
                        <div className={styles.videoWrapper}>
                            <Image
                                src={mentor.video}
                                alt="Video Thumbnail"
                                width={300}
                                height={170}
                                className={styles.videoThumbnail}
                            />
                            <div className={styles.playIcon}>▶</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
