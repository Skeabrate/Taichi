import { YinYang } from "@/components/YinYang";

export function BlogYinYangBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="opacity-[0.03]">
        <YinYang
          className="text-foreground animate-spin-slow h-[60vh] w-[60vh]"
          withDots={true}
        />
      </div>
    </div>
  );
}
