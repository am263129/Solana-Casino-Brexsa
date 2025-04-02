"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-solpot-black/90 border-t border-solpot-gray-dark/50 py-10">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
              <div className="relative h-16 w-16 mr-2">
                <Image
                  src="https://ext.same-assets.com/3674931769/1475813465.svg"
                  alt="Solpot Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <Image
                src="/images/logo.svg"
                alt="Solpot"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              Welcome to Solpot. Play 100% fair on-chain Solana based gambling games like Coinflip and Jackpot.
              Solpot provides instant on-chain deposits and withdrawals for bets of any size.
              We are dedicated to providing gambling games solely for the SOL chain.
              Earn and play with free Solana by opening your Daily Case or participating in our Airdrop promotion.
            </p>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed max-w-md">
              In order to register for this website, the user is required to accept the
              <Link href="/terms" className="text-solpot-purple hover:text-solpot-purple/80 ml-1">
                General Terms and Conditions
              </Link>
              . In the event the General Terms and Conditions are updated, existing users may choose to
              discontinue using the products and services before the said update shall become effective,
              which is a minimum of two weeks after it has been announced.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <h3 className="text-gray-400 font-medium mb-1">Contact Support:</h3>
              <a
                href="mailto:support@solpot.com"
                className="text-solpot-purple hover:text-solpot-purple/80 font-medium"
              >
                support@solpot.com
              </a>
            </div>
            <div className="mb-8">
              <h3 className="text-gray-400 font-medium mb-1">Marketing Inquiries:</h3>
              <a
                href="mailto:partners@solpot.com"
                className="text-solpot-purple hover:text-solpot-purple/80 font-medium"
              >
                partners@solpot.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <a
                href="https://x.com/solpotcom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-solpot-gray-dark/50 hover:bg-solpot-gray-dark transition-colors px-4 py-3 rounded-lg"
              >
                <Button className="bg-solpot-green hover:bg-solpot-green/80 size-8 rounded-lg p-0 mr-3">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </Button>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Follow our</span>
                  <span className="text-white font-medium">X / Twitter</span>
                </div>
                <div className="ml-auto">
                  <Button className="bg-solpot-green hover:bg-solpot-green/80 h-8 rounded-lg">
                    Follow now
                  </Button>
                </div>
              </a>

              <a
                href="https://t.me/SolpotAuthBot?start=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-solpot-gray-dark/50 hover:bg-solpot-gray-dark transition-colors px-4 py-3 rounded-lg"
              >
                <Button className="bg-solpot-green hover:bg-solpot-green/80 size-8 rounded-lg p-0 mr-3">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0Zm5.568 8.16c-.18 1.896-.96 6.504-1.356 8.628-.168.9-.504 1.2-.816 1.236-.696.06-1.224-.456-1.896-.9-1.056-.696-1.656-1.128-2.676-1.8-1.188-.78-.42-1.212.264-1.908.18-.18 3.252-2.976 3.312-3.228a.24.24 0 0 0-.06-.216c-.072-.06-.168-.036-.252-.024-.108.024-1.788 1.14-5.064 3.348-.48.324-.912.492-1.296.48-.432-.012-1.248-.24-1.86-.444-.756-.24-1.344-.372-1.296-.792.024-.216.324-.432.888-.66 3.504-1.524 5.832-2.532 6.996-3.012 3.336-1.392 4.02-1.632 4.476-1.632.096 0 .324.024.468.144.12.096.156.228.168.324-.012.072.012.288 0 .456Z" />
                  </svg>
                </Button>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Join our</span>
                  <span className="text-white font-medium">Telegram</span>
                </div>
                <div className="ml-auto">
                  <Button className="bg-solpot-green hover:bg-solpot-green/80 h-8 rounded-lg">
                    Join TG
                  </Button>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-solpot-gray-dark/50 pt-8 text-center text-gray-400 text-sm">
          © 2024 Solpot.com All Rights Reserved
        </div>

        {/* Fixed bottom navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-solpot-black border-t border-solpot-gray-dark/50 flex justify-center py-2 z-10 md:hidden">
          <div className="flex space-x-12">
            <Link href="/" className="flex flex-col items-center text-gray-400 hover:text-white">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM6 21C5.45 21 4.979 20.804 4.588 20.413C4.196 20.021 4 19.55 4 19V10C4 9.71667 4.075 9.45 4.225 9.2C4.375 8.95 4.575 8.75 4.825 8.6L10.825 4.1C10.9917 3.98333 11.175 3.896 11.375 3.838C11.575 3.77933 11.7833 3.75 12 3.75C12.2167 3.75 12.425 3.77933 12.625 3.838C12.825 3.896 13.0083 3.98333 13.175 4.1L19.175 8.6C19.425 8.75 19.625 8.95 19.775 9.2C19.925 9.45 20 9.71667 20 10V19C20 19.55 19.804 20.021 19.413 20.413C19.021 20.804 18.55 21 18 21H13V15H11V21H6Z" fill="currentColor"/>
              </svg>
              <span className="text-xs mt-1">Jackpot</span>
            </Link>
            <Link href="/coinflip" className="flex flex-col items-center text-gray-400 hover:text-white">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.95C10.5833 21.95 9.23333 21.6667 7.95 21.1C6.66667 20.5333 5.55833 19.7583 4.625 18.775C3.69167 17.7917 2.95833 16.675 2.425 15.425C1.89167 14.175 1.61667 12.85 1.6 11.45C1.6 10.0167 1.88333 8.67067 2.45 7.412C3.01667 6.154 3.8 5.042 4.8 4.075C5.8 3.10833 6.93333 2.354 8.2 1.812C9.46667 1.27067 10.7833 1 12.15 1C13.5167 1 14.8 1.27933 16 1.838C17.2 2.396 18.2333 3.13333 19.1 4.05C19.9667 4.96667 20.65 6.03333 21.15 7.25C21.65 8.46667 21.9 9.75 21.9 11.1C21.9 12.4833 21.6167 13.7833 21.05 15C20.4833 16.2167 19.7083 17.275 18.725 18.175C17.7417 19.075 16.625 19.7833 15.375 20.3C14.125 20.8167 13.0333 21.0917 12.1 21.125L12 21.95ZM12 19.95C13.2167 19.95 14.3667 19.7083 15.45 19.225C16.5333 18.7417 17.4667 18.0917 18.25 17.275C19.0333 16.4583 19.65 15.5083 20.1 14.425C20.55 13.3417 20.7833 12.1833 20.8 10.95C20.8 9.71667 20.5583 8.56667 20.075 7.5C19.5917 6.43333 18.9417 5.5 18.125 4.7C17.3083 3.9 16.3583 3.275 15.275 2.825C14.1917 2.375 13.0333 2.15 11.8 2.15C10.5667 2.15 9.41667 2.39167 8.35 2.875C7.28333 3.35833 6.35 4.00833 5.55 4.825C4.75 5.64167 4.125 6.59167 3.675 7.675C3.225 8.75833 3 9.9 3 11.1C3 12.3 3.23333 13.45 3.7 14.55C4.16667 15.65 4.79167 16.6167 5.575 17.45C6.35833 18.2833 7.28333 18.9417 8.35 19.425C9.41667 19.9083 10.55 20.15 11.75 20.15L12 19.95ZM8 16.8H16L14.75 15.15C14.45 14.75 14.1833 14.4 13.95 14.1C13.7167 13.8 13.5333 13.5083 13.4 13.225C13.2667 12.9417 13.175 12.6583 13.125 12.375C13.075 12.0917 13.05 11.7667 13.05 11.4V8.95H10.95V11.4C10.95 11.7667 10.925 12.0917 10.875 12.375C10.825 12.6583 10.7333 12.9417 10.6 13.225C10.4667 13.5083 10.2833 13.8 10.05 14.1C9.81667 14.4 9.55 14.75 9.25 15.15L8 16.8Z" fill="currentColor"/>
              </svg>
              <span className="text-xs mt-1">Coinflip</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
