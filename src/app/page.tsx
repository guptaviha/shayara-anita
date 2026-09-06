import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-16 min-h-[calc(100vh-100px)]">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start z-10 space-y-6">
        <div>
          <span className="font-great-vibes text-4xl text-gray-400 block mb-2">Hello, i'm</span>
          <h1 className="font-playfair text-6xl md:text-8xl tracking-tight text-gray-900 leading-tight">Anita <br className="hidden md:block" />Mittal Gupta</h1>
        </div>
        <p className="text-gray-600 text-lg max-w-md mt-6 leading-relaxed">
          Welcome. Here you'll find my two passions: my shayari and my portrait photos.
        </p>
        {/* <div className="flex gap-4 mt-8">
          <Link href="/about" className="px-8 py-3 bg-[#b8c5a6] text-white font-medium hover:bg-[#a5b294] transition-colors shadow-sm">
            About Me
          </Link>
          <button className="px-8 py-3 border border-[#b8c5a6] text-[#b8c5a6] font-medium hover:bg-[#f3f6ef] transition-colors">
            Buy Books
          </button>
        </div> */}
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative mt-16 md:mt-0 h-[600px] flex items-center justify-end">
        <div className="absolute top-0 right-0 w-3/4 h-[500px] bg-[#b8c5a6] -z-10"></div>
        <div className="relative w-[90%] h-[400px] shadow-lg">
          <Image
            src="/images/portfolio/cc5ae88b-2561-4488-8ab1-cffd3cb0f0fa.JPG" alt="Anita Mittal Gupta"
            fill
            className="object-cover border-8 border-white"
          />
        </div>
      </div>
    </div>
  );
}
