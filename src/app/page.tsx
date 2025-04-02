import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { JackpotGame } from "@/components/jackpot-game";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="flex-1 pl-0 md:pl-64 pt-16">
        <JackpotGame />
      </main>
      <Footer />
    </div>
  );
}
