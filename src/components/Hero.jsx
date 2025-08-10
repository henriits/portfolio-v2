import { FlipWords } from "../components/ui/FlipWords";
import { GlassCard } from "../components/ui/GlassCard";

const Hero = () => {
  const words = [
    "React Developer",
    "Web Developer",
    "Modern Developer",
    "Frontend Developer",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 bg-cover bg-center">
      <GlassCard className="max-w-3xl w-full text-center p-10">
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
      </GlassCard>
    </section>
  );
};

export default Hero;
