import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AcademicStreams from "@/components/AcademicStreams/AcademicStreams";
import TeachingMethodologies from "@/components/TeachingMethodologies/TeachingMethodologies";
import Mentors from "@/components/Mentors/Mentors";
import Achievers from "@/components/Achievers/Achievers";
import BeyondClassroom from "@/components/BeyondClassroom/BeyondClassroom";
import Houses from "@/components/Houses/Houses";
import Collaboration from "@/components/Collaboration/Collaboration";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AcademicStreams />
      <TeachingMethodologies />
      <Mentors />
      <BeyondClassroom />
      <Houses />
      <Achievers />
      <Collaboration />
      <Footer />
    </main>
  );
}
