import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialBar from "./components/SocialBar";
import Waitlist from "./components/Waitlist";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full justify-between flex-col p-5 mx-auto relative overflow-hidden">
      <video src={"http://localhost:3000/assets/vid2.mp4"} loop autoPlay muted className="absolute z-[-1] w-full h-full object-cover top-0 left-0">
      </video>
      <div className="max-w-screen-xl mx-auto max-w-[1600px] w-full z-10 relative">
        <SocialBar />
        <Navbar />
        <div className="py-40 flex flex-col items-center gap-10">
          <Hero />
          <Waitlist />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto max-w-[1600px] w-full z-10 relative">
        <Footer />
      </div>
    </main>
  );
}