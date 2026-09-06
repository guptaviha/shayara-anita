import Image from "next/image";
import fs from "fs";
import path from "path";

export default function Portfolio() {
  const portfolioDir = path.join(process.cwd(), "public", "images", "portfolio");
  let imageFiles: string[] = [];
  try {
    imageFiles = fs.readdirSync(portfolioDir).filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file));
  } catch (e) {
    console.error("Could not read portfolio directory", e);
  }

  return (
    <div className="px-8 md:px-16 lg:px-24 py-12">
      <div className="text-center mb-16">
        <span className="font-great-vibes text-4xl text-gray-400 block mb-4">Portfolio</span>
        <h1 className="font-playfair text-5xl md:text-6xl text-gray-900">Captured Moments</h1>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {imageFiles.map((filename) => (
          <div key={filename} className="break-inside-avoid relative overflow-hidden group mb-6">
            <div className="relative w-full">
              <Image 
                src={`/images/portfolio/${filename}`}
                alt={`Portfolio image ${filename}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#b8c5a6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
