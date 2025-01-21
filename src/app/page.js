import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero"; // Import the Hero component if it exists

export default function Home() {
  return (
    <div>
      <Header />
      <Hero /> {/* Render the Hero component correctly */}
    </div>
  );
}
