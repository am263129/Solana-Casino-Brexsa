import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { CoinflipGame } from "@/components/coinflip-game";
import { Footer } from "@/components/footer";

export default function CoinflipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="flex-1 pl-0 md:pl-64 pt-16">
        <CoinflipGame />
      </main>
      <Footer />
    </div>
  );
}
