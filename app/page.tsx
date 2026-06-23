import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseMe from "./components/WhyChooseMe";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

import FadeIn from "./components/animations/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />

      <FadeIn>
        <About />
      </FadeIn>

      <FadeIn>
        <WhyChooseMe />
      </FadeIn>

      <FadeIn>
        <Services />
      </FadeIn>

      <FadeIn>
        <Testimonials />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>
    </>
  );
}
