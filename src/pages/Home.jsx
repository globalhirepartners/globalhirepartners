import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Process from "../components/Process";
import CTA from "../components/CTA";
import Stats from "../components/Stats";
import ServicesPreview from "../components/ServicesPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import IndustriesGrid from "../components/IndustriesGrid";
import TrustedBy from "../components/TrustedBy";
import FeaturedServices from "../components/FeaturedServices";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <MainLayout>
      
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
       
    </MainLayout>
  )
}

export default Home;