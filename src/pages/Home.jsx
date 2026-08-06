import MainLayout from "../layouts/MainLayout";

import Hero from "../components/Hero";
import About from "../components/About";
import CTA from "../components/CTA";
import Stats from "../components/Stats";
import ServicesPreview from "../components/ServicesPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import IndustriesGrid from "../components/IndustriesGrid";
import TrustedBy from "../components/TrustedBy";
import FeaturedServices from "../components/FeaturedServices";
import Testimonials from "../components/Testimonials";
import Process from "../components/Process";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <TrustedBy />
      <Stats />
      <ServicesPreview />
      <About />
      <FeaturedServices />
      <WhyChooseUs />
      <IndustriesGrid />
      <Process />
      <Testimonials />
      <CTA />
    </MainLayout>
  );
}

export default Home;