import Announcement from "@/components/Announcement";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ScrolledCard from "@/components/ScrolledCard";
import ServiceQuality from "@/components/ServiceQuality";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <div className="h-full w-screen flex flex-col">
      <Announcement />
      <Navbar />
      <Header />
      <ScrolledCard />
      <Tools />
      <Features />
      <ServiceQuality />
    </div>
  );
}
