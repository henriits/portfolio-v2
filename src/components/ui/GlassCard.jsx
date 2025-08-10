import { cn } from "../../lib/utils";

export const GlassCard = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden shadow-2xl",
        className
      )}
    >
      {/* Dark Glass Layer */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/30 border border-white/10 rounded-2xl z-0" />

      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-2xl z-0 pointer-events-none border border-transparent bg-gradient-to-br from-black/20 to-black/10 shadow-inner shadow-black/30" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
