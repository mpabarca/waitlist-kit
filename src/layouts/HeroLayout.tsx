import { ILayout } from "@/types/layout";
import { cn } from "@/utils/client"; // optional: Tailwind classname merge helper

function HeroLayout({ children, style }: ILayout) {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center",
        "bg-[var(--color-bg)] text-[var(--color-text)] font-sans"
      )}
      style={{
        fontFamily: "var(--font-base)",
        ...style,
      }}
    >
      <main className='w-full max-w-3xl'>{children}</main>
    </div>
  );
}

export default HeroLayout;
