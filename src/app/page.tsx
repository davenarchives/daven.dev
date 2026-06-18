import { Navbar } from "@/components/Navbar";
import { ProfileSidebar } from "@/components/ProfileSidebar";
import { Intro } from "@/components/Intro";
import { Experience } from "@/components/Experience";
import { Tools } from "@/components/Tools";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { SectionNav } from "@/components/SectionNav";

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
            <div className="max-w-[1300px] mx-auto w-full grid lg:grid-cols-[480px_minmax(0,680px)] justify-center gap-12 lg:gap-[70px]">
              <div className="hidden lg:flex justify-end relative">
                <ProfileSidebar />
              </div>
              <div className="w-full max-w-[680px]">
                <Intro />
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="min-h-[calc(100svh-80px)] scroll-mt-0 pt-6 pb-32 lg:pt-6 lg:pb-[150px] flex items-start justify-center"
          >
            <Experience />
          </section>
        </div>

        <section
          id="tools-section"
          className="min-h-[calc(100svh-80px)] scroll-mt-0 px-6 pt-6 pb-32 lg:pt-6 lg:pb-[150px] flex items-start justify-center"
        >
          <div className="max-w-[1024px] mx-auto w-full">
            <Tools />
          </div>
        </section>

        <section
          id="projects"
          className="min-h-[calc(100svh-80px)] scroll-mt-0 px-6 pt-6 pb-20 lg:pt-6 lg:pb-24 flex items-start justify-center"
        >
          <div className="w-full">
            <Projects />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
