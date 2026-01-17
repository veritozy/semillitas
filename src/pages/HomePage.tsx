import Carousel from "../components/organisms/Carousel";
import Hero from "../components/organisms/Hero"
import Articles from "../components/organisms/Articles";
import Testimonials from "../components/organisms/Valores";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Hero />
      <Articles />
      <Testimonials/>
    </>
  );
}
