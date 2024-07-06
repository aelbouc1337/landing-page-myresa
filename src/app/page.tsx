import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import ScrolledCard from "@/components/ScrolledCard";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <div className="h-full w-screen flex flex-col">
      <Announcement />
      <Header />
      <ScrolledCard />
      <Tools />
    </div>
  );
}
