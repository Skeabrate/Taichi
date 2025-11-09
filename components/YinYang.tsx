interface YinYangProps {
  className?: string;
}

export function YinYang({ className = "" }: YinYangProps) {
  const size = 40;
  return (
    <div
      className={`relative shrink-0 ${className} origin-bottom scale-80`}
      style={{ width: size, height: size }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-200">
        <div className="absolute top-0 right-0 h-full w-1/2 bg-white" />
        <div
          className="absolute top-1/6 right-1/4 z-10 rounded-full bg-neutral-200"
          style={{
            width: size * 0.25,
            height: size * 0.25,
          }}
        />
        <div
          className="absolute bottom-1/6 left-1/4 z-10 rounded-full bg-white"
          style={{
            width: size * 0.25,
            height: size * 0.25,
          }}
        />
        <div className="absolute top-0 left-1/4 h-1/2 w-1/2 rounded-full bg-white" />
        <div className="absolute right-1/4 bottom-0 h-1/2 w-1/2 rounded-full bg-neutral-200" />
      </div>
    </div>
  );
}
