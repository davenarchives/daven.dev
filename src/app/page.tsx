import { Navbar } from "@/components/Navbar";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { Intro } from "@/components/Intro";
import { Experience } from "@/components/Experience";
import { Tools } from "@/components/Tools";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { SectionNav } from "@/components/SectionNav";
import { SectionWrapper } from "@/components/SectionWrapper";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionNav />
      <main className="flex-grow pt-[80px] min-h-screen">
        <div className="px-6 flex flex-col gap-12 lg:gap-0">
          <section
            id="hero"
            className="min-h-[calc(100svh-80px)] py-16 lg:py-0 flex items-center justify-center"
          >
            <SectionWrapper>
              <div className="max-w-[1300px] mx-auto w-full flex flex-col lg:grid lg:grid-cols-[480px_minmax(0,680px)] items-center lg:items-start justify-center gap-10 lg:gap-[70px]">
                <div className="flex justify-center lg:justify-end relative w-full">
                  <ProfileSidebar />
                </div>
                <div className="w-full max-w-[680px] flex justify-center lg:justify-start">
                  <Intro />
                </div>
              </div>
            </SectionWrapper>
          </section>

          <section
            id="experience"
            className="min-h-[calc(100svh-80px)] scroll-mt-0 pt-6 pb-32 lg:pt-6 lg:pb-[150px] flex items-start justify-center"
          >
            <SectionWrapper>
              <Experience />
            </SectionWrapper>
          </section>
        </div>

        <section
          id="tools-section"
          className="min-h-[calc(100svh-80px)] scroll-mt-0 px-6 pt-6 pb-32 lg:pt-6 lg:pb-[150px] flex items-start justify-center"
        >
          <SectionWrapper>
            <div className="max-w-[1024px] mx-auto w-full">
              <Tools />
            </div>
          </SectionWrapper>
        </section>

        <section
          id="projects"
          className="min-h-[calc(100svh-80px)] scroll-mt-0 px-6 pt-6 pb-20 lg:pt-6 lg:pb-24 flex items-start justify-center"
        >
          <SectionWrapper>
            <div className="w-full">
              <Projects />
            </div>
          </SectionWrapper>
        </section>
      </main>
      <Footer />
    </>
  );
}
