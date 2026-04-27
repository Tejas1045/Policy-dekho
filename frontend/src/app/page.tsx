import Hero from "@/components/home/Hero/Hero";
import SelectorCard from "@/components/home/SelectorCard";
import NavBar from "@/components/shared/NavBar";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <NavBar/>
      <Hero/>
      
      {/* Hero */}
      {/* <h1 className="text-3xl font-bold text-center mb-2">
        Compare & Buy Insurance in Minutes
      </h1>

      <p className="text-muted-foreground text-center mb-6">
        Get the best deals for your vehicle instantly
      </p> */}
    </div>
  );
}