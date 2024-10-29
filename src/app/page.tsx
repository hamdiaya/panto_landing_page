import Main from "./components/main";
import WhyChoosingUs from "./components/whyChoosingUs";
import BestSellingSection from "./components/bestSellingSection";
import ExpriencesSection from "./components/expriencesSection";
import TestimonialsSection from "./components/testimonialsSection";
import FooterSection from "./components/footerSection";
export default function Home() {
  return (
    <main>
       <Main/>
      <WhyChoosingUs/> 
      <BestSellingSection/>
      <ExpriencesSection/>
      <TestimonialsSection/>
      <FooterSection/>
    </main>
      );
}
