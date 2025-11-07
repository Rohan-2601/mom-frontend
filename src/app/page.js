import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonial from "@/components/Testimonial";
import CTASection from "@/components/CTASection";
import PageLoader from "@/components/PageLoader";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonial />
      <CTASection />
      <PageLoader/>
    </main>
  );
}
