import Navbar from "./components/Navbar";
import PopupBanner from "./components/PopupBanner";
import MarqueeBar from "./components/MarqueeBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Teacher from "./components/Teacher";
import Contact from "./components/Contact";
import AnimationWrapper from "./components/AnimationWrapper";
import Results from "./components/Results";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <PopupBanner/>
      <MarqueeBar/>
      <Hero />

      <AnimationWrapper>
        <Features />
      </AnimationWrapper>

      <AnimationWrapper>
        <Courses />
      </AnimationWrapper>

      <AnimationWrapper>
        <Teacher />
      </AnimationWrapper>

      <AnimationWrapper>
        <Contact />
      </AnimationWrapper>

      <AnimationWrapper>
        <Results/>
      </AnimationWrapper>

      <AnimationWrapper>
        <Footer/>
      </AnimationWrapper>
    </>
  );
}