import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./courses.module.css";

export default function Courses() {
    const overviewItems = [
        {
            id: "pre-primary",
            title: "Foundational Stage",
            desc: "Pre-Kg to Class 2",
            icon: "⭐",
            color: "#fff3e6",
            textColor: "#fd7e14"
        },
        {
            id: "primary",
            title: "Preparatory Stage",
            desc: "Class 3 to 5",
            icon: "📚",
            color: "#e6f2ff",
            textColor: "#0d6efd"
        },
        {
            id: "middle",
            title: "Middle Stage",
            desc: "Class 6 to 8",
            icon: "👥",
            color: "#e6f8f0",
            textColor: "#198754"
        },
        {
            id: "high",
            title: "Secondary Stage",
            desc: "Class 9 to 12",
            icon: "🎓",
            color: "#f3e6ff",
            textColor: "#6f42c1"
        }
    ];

    return (
        <main className={styles.main}>
            <Header />

            {/* Hero Section */}
            <section className={styles.hero}>
                <Image
                    src="/images/classroom_bg.png"
                    alt="Curriculum Background"
                    fill
                    className={styles.heroBg}
                    priority
                />
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Explore Our Curriculum</h1>
                    <p className={styles.heroSubtitle}>
                        From early learning to senior secondary, we guide every child through a structured and value-based journey.
                    </p>
                </div>
                <div className={styles.scrollIndicator}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
                    </svg>
                </div>
            </section>

            {/* Overview Section */}
            <section className={styles.overview}>
                <div className={styles.overviewGrid}>
                    {overviewItems.map((item) => (
                        <div key={item.id} className={styles.overviewCard}>
                            <div className={styles.cardIcon} style={{ backgroundColor: item.color, color: item.textColor }}>
                                {item.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                            <Link href={`#${item.id}`} className={styles.viewDetails}>
                                View Details ↓
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed Sections */}

            {/* Pre-Primary */}
            <section id="pre-primary" className={styles.detailedSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionImageWrapper}>
                        <Image
                            src="/images/hero_students.png" // Using existing image as placeholder
                            alt="Pre-Primary Students"
                            fill
                            className={styles.sectionImage}
                        />
                    </div>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Foundational Stage</h2>
                        <p className={styles.sectionDesc}>
                            The Foundational Stage is the early years of education, typically from Pre-Kg to Class 2. It is a critical time for children to develop essential skills and knowledge that will shape their future learning journey.
                        </p>
                        <ul className={styles.curriculumList}>
                            <li>Safe, nurturing environment</li>
                            <li>Early language development</li>
                            <li>Activity and music-based learning</li>
                            <li>Fine motor development</li>
                            <li>Social bonding</li>
                        </ul>
                        <div className={styles.featureBox}>
                            <span className={styles.featureTitle}>Feature Highlight</span>
                            <span className={styles.featureText}>Play-way method with focus on individual attention.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Primary */}
            <section id="primary" className={styles.detailedSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Preparatory Stage (Classes 1–5)</h2>
                        <p className={styles.sectionDesc}>
                            The Preparatory Stage blends activity-based learning with structured classroom teaching. Students build strong foundations in reading, writing, languages, science, mathematics, art, and physical education through interactive, engaging, and discovery-led lessons.
                        </p>
                        <ul className={styles.curriculumList}>
                            <li>Concept-driven learning</li>
                            <li>English reading/writing focus</li>
                            <li>Environmental studies</li>
                            <li>Art & craft</li>
                            <li>Introduction to computers</li>
                        </ul>
                        <div className={styles.featureBox}>
                            <span className={styles.featureTitle}>Feature Highlight</span>
                            <span className={styles.featureText}>Project-based learning to encourage curiosity.</span>
                        </div>
                    </div>
                    <div className={styles.sectionImageWrapper}>
                        <Image
                            src="/images/classroom_bg.png" // Using existing image as placeholder
                            alt="Primary Students"
                            fill
                            className={styles.sectionImage}
                        />
                    </div>
                </div>
            </section>

            {/* Middle School */}
            <section id="middle" className={styles.detailedSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionImageWrapper}>
                        <Image
                            src="/images/hero_students.png" // Using existing image as placeholder
                            alt="Middle School Students"
                            fill
                            className={styles.sectionImage}
                        />
                    </div>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Middle Stage (Classes 6–8)</h2>
                        <p className={styles.sectionDesc}>
                            The Middle Stage introduces subject-wise teaching, helping students explore deeper concepts across science, mathematics, arts, humanities, and social sciences. Learning becomes more experiential and interactive, encouraging curiosity, critical thinking, and connections between different subjects.
                        </p>
                        <ul className={styles.curriculumList}>
                            <li>Science experiments</li>
                            <li>Group activities</li>
                            <li>ICT skills</li>
                            <li>Social science projects</li>
                            <li>Communication skills</li>
                        </ul>
                        <div className={styles.featureBox}>
                            <span className={styles.featureTitle}>Feature Highlight</span>
                            <span className={styles.featureText}>Focus on STEM and collaborative projects.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* High School */}
            <section id="high" className={styles.detailedSection}>
                <div className={styles.sectionContainer}>
                    <div className={styles.sectionContent}>
                        <h2 className={styles.sectionTitle}>Secondary Stage (Classes 9–12)</h2>
                        <p className={styles.sectionDesc}>
                            The Secondary Stage offers four years of multidisciplinary learning with deeper subject exploration, critical thinking, and flexible subject choices. Students gain clarity about their strengths, interests, and future goals, preparing them for higher education and career pathways.
                        </p>
                        <ul className={styles.curriculumList}>
                            <li>Advanced science/commerce curriculum</li>
                            <li>Lab-based learning</li>
                            <li>Mock tests & assessments</li>
                            <li>Career counselling</li>
                            <li>NEET/JEE/Foundation-level coaching</li>
                        </ul>
                        <div className={styles.featureBox}>
                            <span className={styles.featureTitle}>Feature Highlight</span>
                            <span className={styles.featureText}>Personalized mentorship for board exam success.</span>
                        </div>
                    </div>
                    <div className={styles.sectionImageWrapper}>
                        <Image
                            src="/images/classroom_bg.png" // Using existing image as placeholder
                            alt="High School Students"
                            fill
                            className={styles.sectionImage}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <Image
                    src="/images/classroom_bg.png"
                    alt="Admissions Background"
                    fill
                    className={styles.ctaBg}
                />
                <div className={styles.ctaOverlay}></div>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
                    <p className={styles.ctaSubtitle}>
                        Admissions Open for Academic Year 2024-25. Join the Learners Global School family today.
                    </p>
                    <Link href="/contact" className={styles.ctaButton}>
                        Enquire Now
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
