import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between px-8 md:px-16 lg:px-24 py-12 min-h-[calc(100vh-100px)] gap-16">
      {/* Left Image */}
      <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-full flex items-center">
        <div className="absolute top-1/4 -left-12 w-1/2 h-1/2 bg-[#b8c5a6] -z-10"></div>
        <div className="relative w-full h-full min-h-[600px]">
          <Image
            src="/images/portfolio/42fd4227-fb25-4c79-b668-fce01fc073d3.JPG"
            alt="Anita Mittal Gupta meeting"
            fill
            className="object-cover border-[16px] border-[#F2F1EC]"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start justify-center py-8">
        <span className="font-great-vibes text-4xl text-gray-400 block mb-4">About me</span>
        <h1 className="font-playfair text-5xl md:text-7xl leading-tight text-gray-900 mb-8">
          I'm a Poet<br />and a Model.
        </h1>

        <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-lg">
          <p>
            Hello, and welcome to my space. I am an Indian poet and a model, navigating the world through the lens of art and expression.
          </p>
          <p>
            These are my two greatest passions—capturing unseen emotions through my words, and finding unspoken beauty in front of the camera.
          </p>
          <p>
            I believe that poetry gives a voice to the soul, while modeling allows me to physically embody art. Thank you for joining me on this journey as I share these passions with the world.
          </p>
        </div>

        {/* <button className="mt-12 px-8 py-4 border border-[#b8c5a6] text-[#b8c5a6] font-medium hover:bg-[#f3f6ef] transition-colors flex items-center gap-2">
          My Latest Book <span>&rarr;</span>
        </button> */}
      </div>
    </div>
  );
}
