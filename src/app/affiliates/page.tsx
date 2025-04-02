import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";

export default function AffiliatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Sidebar />
      <main className="flex-1 pl-0 md:pl-64 pt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 pt-20 md:pt-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold airstrike-font text-white">Affiliates</h1>
            <p className="text-gray-400 mt-2">Share your referral link with friends and get paid for each bet placed!</p>
            <p className="text-gray-400">The more you share, the more you earn!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-solpot-black/80 border-solpot-gray-dark/50 p-6 gradient-border">
              <h2 className="text-xl font-bold text-white mb-4">Telegram Panels</h2>
              <p className="text-gray-300 mb-6">Share your unique referral code on Telegram to earn rewards</p>
              <div className="flex items-center justify-center bg-solpot-gray-dark/30 p-8 rounded-lg border border-solpot-gray-dark">
                <svg className="w-16 h-16 text-solpot-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm5.568 8.16c-.18 1.896-.96 6.504-1.356 8.628-.168.9-.504 1.2-.816 1.236-.696.06-1.224-.456-1.896-.9-1.056-.696-1.656-1.128-2.676-1.8-1.188-.78-.42-1.212.264-1.908.18-.18 3.252-2.976 3.312-3.228a.24.24 0 0 0-.06-.216c-.072-.06-.168-.036-.252-.024-.108.024-1.788 1.14-5.064 3.348-.48.324-.912.492-1.296.48-.432-.012-1.248-.24-1.86-.444-.756-.24-1.344-.372-1.296-.792.024-.216.324-.432.888-.66 3.504-1.524 5.832-2.532 6.996-3.012 3.336-1.392 4.02-1.632 4.476-1.632.096 0 .324.024.468.144.12.096.156.228.168.324-.012.072.012.288 0 .456Z" fill="currentColor" />
                </svg>
              </div>
            </Card>

            <Card className="bg-solpot-black/80 border-solpot-gray-dark/50 p-6 gradient-border">
              <h2 className="text-xl font-bold text-white mb-4">Streamer Panels</h2>
              <p className="text-gray-300 mb-6">Share your unique referral code on your stream to earn rewards</p>
              <div className="flex items-center justify-center bg-solpot-gray-dark/30 p-8 rounded-lg border border-solpot-gray-dark">
                <svg className="w-16 h-16 text-solpot-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43z" fill="currentColor" />
                </svg>
              </div>
            </Card>
          </div>

          <Card className="bg-solpot-black/80 border-solpot-gray-dark/50 p-6 gradient-border mb-8">
            <h2 className="text-xl font-bold text-white mb-6">Statistics</h2>
            <div className="flex flex-col md:flex-row justify-around">
              <div className="text-center mb-6 md:mb-0">
                <div className="text-gray-400 mb-1">You've earned</div>
                <div className="text-4xl font-bold text-solpot-purple">0</div>
                <div className="text-sm text-gray-400">SOL</div>
              </div>
              <div className="text-center mb-6 md:mb-0">
                <div className="text-gray-400 mb-1">Users</div>
                <div className="text-4xl font-bold text-white">0</div>
                <div className="text-sm text-gray-400">Referred users</div>
              </div>
              <div className="text-center mb-6 md:mb-0">
                <div className="text-gray-400 mb-1">Total Wagered</div>
                <div className="text-4xl font-bold text-white">0</div>
                <div className="text-sm text-gray-400">SOL</div>
              </div>
            </div>
          </Card>

          <Card className="bg-solpot-black/80 border-solpot-gray-dark/50 p-6 gradient-border">
            <h2 className="text-xl font-bold text-white mb-6">Wager Stats</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-solpot-gray-dark/50">
                    <th className="text-left text-gray-400 font-medium py-3 px-4">Name</th>
                    <th className="text-left text-gray-400 font-medium py-3 px-4">Wagered</th>
                    <th className="text-left text-gray-400 font-medium py-3 px-4">Commission</th>
                    <th className="text-left text-gray-400 font-medium py-3 px-4">First Seen</th>
                    <th className="text-left text-gray-400 font-medium py-3 px-4">Last Seen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-400 text-center">
                    <td colSpan={5} className="py-6">No referrals yet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
