import { ILayout } from "@/types/layout";
import { cn } from "@/utils/client";

function HeroLayout({ children }: ILayout) {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center",
        "bg-background text-foreground font-sans"
      )}
      style={{
        fontFamily: "var(--font-base)",
      }}
    >
      <main className='w-full max-w-3xl'>{children}</main>
    </div>
  );
}

export default HeroLayout;
