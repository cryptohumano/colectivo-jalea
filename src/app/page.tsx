import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#FF2670] mb-4">
            COLECTIVO JALEA
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto mb-8">
            Un colectivo para votar en Polkadot DAO y Kusama, basado en miembros
            activos del ecosistema en diferentes áreas que buscan un gasto justo
            y adaptable.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <Image
            src="/sandwisch.jpeg"
            alt="Colectivo Jalea Member"
            className="w-full h-auto object-cover rounded-lg"
            width={200}
            height={200}
          />
          <Image
            src="/jalea2.jpeg"
            alt="Colectivo Jalea Member"
            className="w-full h-auto object-cover rounded-lg"
            width={200}
            height={200}
          />
          <Image
            src="/polkadot_black.jpeg"
            alt="Polkadot"
            className="w-full h-auto object-cover rounded-lg"
            width={200}
            height={200}
          />
          <Image
            src="/bird.jpeg"
            alt="Colectivo Jalea Member"
            className="w-full h-auto object-cover rounded-lg"
            width={200}
            height={200}
          />
          <Image
            src="/jalea1.jpeg"
            alt="Colectivo Jalea Member"
            className="w-full h-auto object-cover rounded-lg"
            width={200}
            height={200}
          />
          <Image
            src="/kusama.jpeg"
            alt="Kusama"
            className="w-full h-auto object-cover rounded-lg"
            width={200}
            height={200}
          />
          <Image
            src="/wood.jpeg"
            alt="Colectivo Jalea Member"
            className="w-full h-auto object-cover rounded-lg"
            width={200}
            height={200}
          />
        </div>

        {/* Delegation Addresses */}
        <div className="bg-[#FF2670]/10 p-6 rounded-lg max-w-2xl w-full">
          <h3 className="text-2xl font-semibold text-[#FF2670] mb-4">
            Direcciones de Delegación
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-black mb-2">Kusama:</p>
              <code className="bg-gray-100 p-2 rounded block text-sm break-words">
                HAzunPwW18ZndVjeF974nfHEjUTkWm6sTGmsKKXZvnbz7yX
              </code>
            </div>
            <div>
              <p className="font-medium text-black mb-2">Polkadot:</p>
              <code className="bg-gray-100 p-2 rounded block text-sm break-words">
                13StobwMokjUy5QdkqZxzWJKC1Dmb4SeDL2qYJL3ot6KBGVt
              </code>
            </div>
          </div>
        </div>
      </main>

      {/* Slim Footer */}
      <footer className="bg-black text-white py-2">
        <div className="container mx-auto px-4 flex justify-center space-x-4">
          <a
            href="https://discord.com/invite/polkadot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF2670] hover:text-[#FF2670]/80 transition-colors flex items-center space-x-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            {/* <span>Discord</span> */}
          </a>
          <a
            href="https://x.com/Polkadot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF2670] hover:text-[#FF2670]/80 transition-colors flex items-center space-x-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {/* <span>X</span> */}
          </a>
        </div>
      </footer>
    </div>
  );
}
