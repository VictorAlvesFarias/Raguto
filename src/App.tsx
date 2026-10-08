import { Toast } from "radix-ui";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Marquee } from "./sections/Marquee";
import { Process } from "./sections/Process";
import { Services } from "./sections/Services";
import { Testimonials } from "./sections/Testimonials";

export default function App() {
  return (
    <Toast.Provider swipeDirection="right" label="Notificação">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Toast.Viewport className="fixed right-0 bottom-0 z-[60] m-4 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3 outline-none sm:m-6" />
    </Toast.Provider>
  );
}
