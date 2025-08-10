import { FlipWords } from "../components/ui/FlipWords";

const Hero = () => {
  const words = [
    "React Developer",
    "Web Developer",
    "Modern Developer",
    "Frontend Developer",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-cover bg-center">
      <div className="relative max-w-3xl w-full text-center p-10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Dark Glass Layer */}
        <div className="absolute inset-0 backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl z-0" />

        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 rounded-2xl z-0 pointer-events-none border border-transparent bg-gradient-to-br from-black/20 to-black/10 shadow-inner shadow-black/30" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Hello, I'm a{" "}
            <span className="text-shadow-colored">
              <br />
              <FlipWords words={words} />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-4 drop-shadow">
            Explore my journey, skills, and projects. <br />
            Let’s connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
