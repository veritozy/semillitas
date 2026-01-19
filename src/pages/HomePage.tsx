import Carousel from "../components/organisms/Carousel";
import Hero from "../components/organisms/Hero"
import Metodologia from "../components/organisms/Metodologia";
import Testimonials from "../components/organisms/Testimonials";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Hero />
       <Metodologia/>
      <Testimonials/>
    </>
  );
}
